import os from 'os';
import fs from 'fs';
import path from 'path';
import { Keypair, clusterApiUrl, PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { publicKey, generateSigner, createSignerFromKeypair, signerIdentity, percentAmount } from '@metaplex-foundation/umi';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { mplTokenMetadata, createV1, mintV1, TokenStandard } from '@metaplex-foundation/mpl-token-metadata';

const privKey = fs.readFileSync(path.join(os.homedir(), '/.config/solana/id.json')).toString();
const umi = createUmi(clusterApiUrl('devnet'), { commitment: 'confirmed' })
  .use(mplTokenMetadata());
const wallet = Keypair.fromSecretKey(new Uint8Array(JSON.parse(privKey)));
const signer = createSignerFromKeypair(umi, umi.eddsa.createKeypairFromSecretKey(wallet.secretKey));
umi.use(signerIdentity(signer, true));

async function createToken() {
  const mint = generateSigner(umi);
  console.info('mint: ', mint);

  const createRes = await createV1(umi, {
    mint,
    authority: signer,
    name: 'LayerZero',
    symbol: '$ZEO',
    decimals: 6,
    uri: '',
    sellerFeeBasisPoints: percentAmount(0),
    creators: [{
      address: publicKey(wallet.publicKey.toString()),
      verified: true,
      share: 100,
    }],
    tokenStandard: TokenStandard.Fungible,
  }).sendAndConfirm(umi);

  console.info('createRes: ', createRes);

  const mintRes = await mintV1(umi, {
    mint: mint.publicKey,
    authority: signer,
    amount: 1000000000000,
    tokenOwner: signer.publicKey,
    tokenStandard: TokenStandard.NonFungible,
  }).sendAndConfirm(umi)

  console.info('mintRes: ', mintRes);
}

createToken().catch(console.error);
