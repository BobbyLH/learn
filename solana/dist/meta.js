"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const web3_js_1 = __importDefault(require("@solana/web3.js"));
const umi_bundle_defaults_1 = require("@metaplex-foundation/umi-bundle-defaults");
const mpl_token_metadata_1 = require("@metaplex-foundation/mpl-token-metadata");
const privKey = fs_1.default.readFileSync(path_1.default.join(os_1.default.homedir(), '/.config/solana/id.json')).toString();
const umi = (0, umi_bundle_defaults_1.createUmi)(web3_js_1.default.clusterApiUrl('devnet')).use((0, mpl_token_metadata_1.mplTokenMetadata)());
const wallet = web3_js_1.default.Keypair.fromSecretKey(new Uint8Array(JSON.parse(privKey)));
console.log(wallet);
// async function submitTokenMetadata() {
//   // 初始化 Metaplex
//   // 创建新的Token Mint
//   // const token = await Token.createMint(connection, wallet, wallet.publicKey, null, 0, solanaWeb3.TOKEN_PROGRAM_ID);
//   // 生成PDA
//   // const [metadataPDA] = solanaWeb3.PublicKey.findProgramAddressSync(
//   //   [
//   //     Buffer.from('metadata'),
//   //     Metadata.METADATA_PROGRAM_ID.toBuffer(),
//   //     token.publicKey.toBuffer()
//   //   ],
//   //   Metadata.METADATA_PROGRAM_ID
//   // );
//   // 元数据
//   const metadataTx = createMetadataAccountV3(
//     umi,
//     {
//       mint: '',
//       data: {
//         name: 'Blow Light High Token',
//         symbol: 'BLH',
//         uri: '',
//         sellerFeeBasisPoints: 500,  // 手续费
//         creators: [{
//           address: wallet.publicKey.toString(),
//           verified: true,
//           share: 100,
//         }],
//       },
//       isMutable: true,
//       collectionDetails: null
//     }
//   );
//   // 确认交易
//   // await connection.confirmTransaction(metadataTx);
//   const confirmResult = await metadataTx.sendAndConfirm(umi);
//   console.info('confirmResult: ', confirmResult);
// }
// submitTokenMetadata().catch(console.error);
