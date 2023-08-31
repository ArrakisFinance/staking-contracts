// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getAddressBookByNetwork = (network: string) => {
  switch (network) {
    case "optimism":
      return {
        AdminMultiSig: "0x8636600A864797Aa7ac8807A065C5d8BD9bA3Ccb",
        GaugeImplementation: "0xe03311D30bdeb60511BAe8de135C6524B9576B2e",
        MockCRV: "0xB9BB2856e0Af9d3e855b0173A40059Fc29b632dA",
        MockVE: "0xd158CCfabef917ae2f01E454D07E1F2055e44c79",
        MockBoost: "0x336649aEb266f3182d63f4FAD7B3cF0dBa15f4c8",
        GaugeRegistry: "0x2FF5D1da4985113F467BBBFF015e76ce8aB05F29",
      };

    case "mainnet":
      return {
        AdminMultiSig: "0x5108EF86cF493905BcD35A3736e4B46DeCD7de58",
        GaugeImplementation: "0x86D62A8AD19998E315e6242b63eB73F391D4674B",
        MockCRV: "0xD533a949740bb3306d119CC777fa900bA034cd52",
        MockVE: "0x5f3b5DfEb7B28CDbD7FAba78963EE202a494e2A2",
        MockBoost: "0x8E0c00ed546602fD9927DF742bbAbF726D5B0d16",
        GaugeRegistry: "0xf397073BF8AA624271EFcF01952f448BD82bf1C4",
      };

    case "arbitrum":
      return {
        AdminMultiSig: "0x77BADa8FC2A478f1bc1E1E4980916666187D0dF7",
        GaugeImplementation: "0x4Ace4b3eb96BD7b3136aB7e14f070717a8137be8",
        MockCRV: "0xf397073BF8AA624271EFcF01952f448BD82bf1C4",
        MockVE: "0x0bF220343ba29a422db1577eD2DdA173c39A42DE",
        MockBoost: "0x31a38B9B9E4b134bDF2559605EB6FC30F24a47D5",
        GaugeRegistry: "0xB37F44B90F017a45f14F0Bb65dbA13f3b26534c2",
      };

    case "matic":
      return {
        AdminMultiSig: "0xDEb4C33D5C3E7e32F55a9D6336FE06010E40E3AB",
        GaugeImplementation: "0x16Bb396868Cc76D179533A18ED6B11a1ec8bd49a",
        MockCRV: "0x3755CEaa62F70B989f1DE71d6b868cEd2dAD0D32",
        MockVE: "0x9d9208c87dc9b3a458Af62f510fdEC401a08DDc0",
        MockBoost: "0x9a1cF3931e682C32acF35b1D238090560B4815E5",
        GaugeRegistry: "0xD526D8De90d54E9ea16C0Da810A2Dd3FD0e8F930",
      };

    case "goerli":
      return {
        AdminMultiSig: "0xB4fa2C382dAf08531F8BA4515F409A129beCFd02",
        GaugeImplementation: "0xB82C4D83FA50bFA04E8778529d58305Cf3feE83e",
        MockCRV: "0xc164893891d312876c8b0a59811db096f8a740cc",
        MockVE: "0x654B32A1230A78cE2FeB4CC42952dC89C5f482C1",
        MockBoost: "0x3025b46A9814a69EAf8699EDf905784Ee22C3ABB",
        GaugeRegistry: "0xC7D07F21b1A8F320018208D02daDF8A0CBd3ce48",
      };
    case "hardhat":
      return {
        AdminMultiSig: "0xAa2E0c5c85ACb7717e58060AB3c96d2B184EE07C",
        GaugeImplementation: "",
        MockCRV: "",
        MockVE: "",
        MockBoost: "",
        GaugeRegistry: "",
      };

    default: {
      throw new Error(`addressBooks: network: ${network} not supported`);
    }
  }
};
