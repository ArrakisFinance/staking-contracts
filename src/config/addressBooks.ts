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
        AdminMultiSig: "",
        GaugeImplementation: "",
        MockCRV: "",
        MockVE: "",
        MockBoost: "",
      };

    case "matic":
      return {
        AdminMultiSig: "0x88215a2794ddC031439C72922EC8983bDE831c78",
        GaugeImplementation: "0x5780Bb3A9f579Dc181B5FE00d8f56224DD9e04a0",
        MockCRV: "0x1cA8bc12faCcdE52D3D4Ee21020d63e15714534f",
        MockVE: "0x969681d96549F7F124D3585FfeEb2C05CAd4813F",
        MockBoost: "0x72155b4cEa73b000973376cD10BD7607A236A6F7",
      };

    case "goerli":
      return {
        AdminMultiSig: "0x4B5BaD436CcA8df3bD39A095b84991fAc9A226F1",
        GaugeImplementation: "",
        MockCRV: "",
        MockVE: "",
        MockBoost: "",
      };
    case "hardhat":
      return {
        AdminMultiSig: "0x88215a2794ddC031439C72922EC8983bDE831c78",
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
