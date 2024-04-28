import os from 'os';
import fs from 'fs';
import path from 'path';
import { Keypair, clusterApiUrl, PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { publicKey, createSignerFromKeypair, signerIdentity } from '@metaplex-foundation/umi';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { mplTokenMetadata, createMetadataAccountV3, updateV1, fetchMetadataFromSeeds } from '@metaplex-foundation/mpl-token-metadata';
import { nftStorageUploader } from '@metaplex-foundation/umi-uploader-nft-storage';

const privKey = fs.readFileSync(path.join(os.homedir(), '/.config/solana/id.json')).toString();
const umi = createUmi(clusterApiUrl('devnet'), { commitment: 'confirmed' })
  .use(mplTokenMetadata())
  .use(nftStorageUploader({
    token: ''
  }));
const wallet = Keypair.fromSecretKey(new Uint8Array(JSON.parse(privKey)));
const signer = createSignerFromKeypair(umi, umi.eddsa.createKeypairFromSecretKey(wallet.secretKey));
umi.use(signerIdentity(signer, true));

const mintAddr = 'DdNTpfWsYM5Hyy8yCpWpo3brKEdcbRFGbFRfhzuVnRqL';

async function createTokenMetaData() {
  const pda = umi.eddsa.findPda(publicKey(ASSOCIATED_TOKEN_PROGRAM_ID), [
    wallet.publicKey.toBuffer(),
    TOKEN_PROGRAM_ID.toBuffer(),
    new PublicKey(mintAddr).toBuffer(),
  ]);

  const createTx = createMetadataAccountV3(
    umi,
    {
      mint: pda,
      mintAuthority: signer,
      payer: signer,
      data: {
        name: 'Blow Light High Token',
        symbol: 'BLH',
        uri: '',
        sellerFeeBasisPoints: 0,
        creators: [{
          address: publicKey(wallet.publicKey.toString()),
          verified: true,
          share: 50,
        }],
        collection: null,
        uses: null
      },
      isMutable: true,
      collectionDetails: null
    }
  );

  const confirmResult = await createTx.sendAndConfirm(umi);
  console.info('confirmResult: ', confirmResult);
}

async function updateTokenMetadata() {
  const mint = publicKey(mintAddr);

  const initialMetadata = await fetchMetadataFromSeeds(umi, { mint })
  console.log('initialMetadata', initialMetadata);
  // const uri = await umi.uploader.uploadJson({
  //   name: 'Blow from Low to High',
  //   description: 'BLH to the moon',
  //   image: 'https://www.omnidoor.org/img/logo.png',
  // }).catch(e => console.error(e, e.message));
  // const updateTx = updateV1(umi, {
  //   mint,
  //   authority: signer,
  //   data: {
  //     ...initialMetadata,
  //     uri
  //   },
  //   primarySaleHappened: false,
  //   isMutable: true
  // })
  // const confirmResult = await updateTx.sendAndConfirm(umi);
  // console.info('confirmResult: ', confirmResult);
}

updateTokenMetadata().catch(console.error);
