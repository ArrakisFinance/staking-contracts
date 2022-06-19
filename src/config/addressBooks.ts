// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getAddressBookByNetwork = (network: string) => {
  switch (network) {
    case "optimism":
      return {
        AdminMultiSig: "",
        GaugeImplementation: "",
        MockCRV: "",
        MockVE: "",
        MockBoost: "",
      };

    case "mainnet":
      return {
        AdminMultiSig: "0x5108EF86cF493905BcD35A3736e4B46DeCD7de58",
        GaugeImplementation: "0x86D62A8AD19998E315e6242b63eB73F391D4674B",
        MockCRV: "0xD533a949740bb3306d119CC777fa900bA034cd52",
        MockVE: "0x5f3b5DfEb7B28CDbD7FAba78963EE202a494e2A2",
        MockBoost: "0xD67bdBefF01Fc492f1864E61756E5FBB3f173506",
      };

    case "matic":
      return {
        AdminMultiSig: "0xDEb4C33D5C3E7e32F55a9D6336FE06010E40E3AB",
        GaugeImplementation: "0x16Bb396868Cc76D179533A18ED6B11a1ec8bd49a",
        MockCRV: "0x3755CEaa62F70B989f1DE71d6b868cEd2dAD0D32",
        MockVE: "0x9d9208c87dc9b3a458Af62f510fdEC401a08DDc0",
        MockBoost: "0x9a1cF3931e682C32acF35b1D238090560B4815E5",
      };

    case "goerli":
      return {
        AdminMultiSig: "",
        GaugeImplementation: "",
        MockCRV: "",
        MockVE: "",
        MockBoost: "",
      };
    case "hardhat":
      return {
        AdminMultiSig: "0xAa2E0c5c85ACb7717e58060AB3c96d2B184EE07C",
        GaugeImplementation: "",
        MockCRV: "",
        MockVE: "",
        MockBoost: "",
      };

    default: {
      throw new Error(`addressBooks: network: ${network} not supported`);
    }
  }
};
