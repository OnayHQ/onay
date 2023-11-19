import { gql } from "graphql-request";

export type NetworkQueryName =
  | "celo"
  | "arbitrum"
  | "base"
  | "polygonzk"
  | "gnosis"
  | "scroll";

export const getAllowancesQuery = gql`
  query getAllowancesQuery($address: String!) {
    accounts(where: { id: $address, allowances_: { allowance_gt: "0" } }) {
      id
      allowances {
        allowance
        token
        spender
      }
    }
  }
`;

export const queryUrl = (networkName: NetworkQueryName) =>
  `https://api.studio.thegraph.com/query/58840/onay-${networkName}/version/latest`;
