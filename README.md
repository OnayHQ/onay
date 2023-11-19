<a name="readme-top"></a>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]

</div>

<!-- PROJECT INTRO -->

<br />
<div align="center">
  <a href="https://github.com/OnayHQ/onay">
    <img src="https://i.imgur.com/j3NUDl1.png">
  </a>
 <h3 align="center">  </h3>

  <p align="center">

  [🇹🇷 Eth Global Istanbul 2023 Hackaton Project 🇹🇷 ](https://ethglobal.com/events/istanbul)

</div>

<br />


<!-- TABLE OF CONTENTS -->

# Table of Contents 

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
    - [Onay Team](#onay-team)
- [Acknowledgments](#acknowledgments)

<br />


<!-- ABOUT THE PROJECT -->

# About The Project


<br />

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Onay is a security system that secures your token approvals by monitoring the contract security breaches and react by revoking the permissions for you if a smart contract exploit is detected. Without compromising any custody.

Onay means "Approval" in Turkish and took inspiration from the streets of Instanbul.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


# Built With


Onay is proudly supported by the following sponsors:

* [![safe][safe-img]][safe-url]
* [![WalletConnect][walletconnect-img]][walletconnect-url]
* [![TheGraph][thegraph-img]][thegraph-url]
* [![Base][base-img]][base-url]
* [![Celo][celo-img]][celo-url]
* [![PolygonZkEVM][polygonzkevm-img]][polygonzkevm-url]
* [![Arbitrum][arbitrum-img]][arbitrum-url]
* [![Scroll][scroll-img]][scroll-url]
* [![Gnosis][gnosis-img]][gnosis-url]

These powerful tools and frameworks have helped us create a seamless user experience and ensure the scalability and reliability of our platform.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED   -->


# Getting Started


To get started with Onay, follow these steps:

1. Connect your Safe Wallet to the Onay dapp at [onay-app.vercel.app](https://onay-app.vercel.app/)

2. See the different token approvals you gave to the different contracts per token and network.

3. Secure your token approvals by adding OnlyModule to your Safe through the dapp. It gives the Security Council permission to revoke your approval in case of a security breach in a Smart Contract.

4. If a security breack happens the Security Council revokes your approvals inmediatly, even if you are sleeping, keeping your funds SAFU.

## The Security Council 

The Security Council is a Multi-Sig conformed by DAOs, security organizations and independent security researchers. Any member of the Council has permissions to hit the Red Button. Which will execute bulk revokes in one transaction for the potentially affected wallets. Since the Security Council can only revoke allowances, there is no extra risk to use this module. The worst harm it can do is to revoke all your allowances for no reason, but there is no incentive nor benefit to do so.

## Figma

https://www.figma.com/file/BCSigw0HAn5olNmrRArAOj/Onay---secure-your-approvals?type=design&node-id=0%3A1&mode=design&t=xDsfntwUL3HnenzH-1

## Safe OnayModule Contract Addresses


Celo: [0x1e4feed269D99B67B2Bf70Ab5BAab3Ca46285C25](https://explorer.celo.org/mainnet/address/0x1e4feed269D99B67B2Bf70Ab5BAab3Ca46285C25)

Scroll: [0x1e4feed269D99B67B2Bf70Ab5BAab3Ca46285C25](https://scrollscan.com/address/0x1e4feed269D99B67B2Bf70Ab5BAab3Ca46285C25)

PolygonZK: [0x1e4feed269D99B67B2Bf70Ab5BAab3Ca46285C25](https://zkevm.polygonscan.com/address/0x1e4feed269D99B67B2Bf70Ab5BAab3Ca46285C25)

Arbitrum: [0x1e4feed269D99B67B2Bf70Ab5BAab3Ca46285C25](https://arbiscan.io/address/0x1e4feed269D99B67B2Bf70Ab5BAab3Ca46285C25)

Gnosis: [0x62450f4067C79EfdBF2ABd5ae6F089d81cd6672d](https://gnosisscan.io/address/0x62450f4067C79EfdBF2ABd5ae6F089d81cd6672d)

Base: [0x1e4feed269D99B67B2Bf70Ab5BAab3Ca46285C25](https://basescan.org/address/0x1e4feed269D99B67B2Bf70Ab5BAab3Ca46285C25)


# Allowances Subgraphs API endpoints
[Celo](https://api.studio.thegraph.com/query/58840/onay-celo/version/latest)

[Scroll](https://api.studio.thegraph.com/query/58840/onay-scroll/version/latest)

[Polygon zkEVM](https://api.studio.thegraph.com/query/58840/onay-polygonzk/version/latest)

[Arbitrum](https://api.studio.thegraph.com/query/58840/onay-arbitrum/version/latest)

[Gnosis](https://api.studio.thegraph.com/query/58840/onay-gnosis/version/latest)

[Base](https://api.studio.thegraph.com/query/58840/onay-base/version/latest)

# Subgraph Example Query By Address (Arbitrum)

Query
```
{
  accounts(where: {id:"0x00fe70b0a6a4e4a21d6061292cd6ff44409b7d84",allowances_: {allowance_gt: "0"}}) {
    id
    allowances {
      allowance
      token
      spender
    }
  }
}

```

Output
```
{
  "data": {
    "accounts": [
      {
        "id": "0x00fe70b0a6a4e4a21d6061292cd6ff44409b7d84",
        "allowances": [
          {
            "allowance": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            "token": "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
            "spender": "0x9aed3a8896a85fe9a8cac52c9b402d092b629a30"
          }
        ]
      }
    ]
  }
}
```

## Installation 

 To get started with Join installation, follow these steps:

1. Clone the repo
   ```sh
   git clone https://github.com/OnayHQ/onay/
   ```
2. Navigate to the project directory:
   ```sh
   cd packages/app
   ```
3. Install the necessary dependencies:
   ```js
   pnpm install
   ```
4.  Configure the environment variables:
  * Rename the .env.example file to .env.
  * Open the .env file and fill in the required configuration values.
5. Start the development server:
    ```js
   pnpm dev
   ```
6. Open your web browser and visit http://localhost:3000 to access the Join application.

Please note that the above steps assume you have Node.
Node and yarn (package manager) installed on your machine

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->

# Contributing

At Onay, we believe that contributions from the open-source community are what make our project truly amazing. We appreciate any contributions you make and welcome your ideas, suggestions, and enhancements.

If you have a suggestion or improvement that would help make Join even better, here's how you can contribute:

1. Fork the Project
2. Create a new branch for your feature or enhancement (`git checkout -b feature/onay`).
3. Commit your Changes (`git commit -m 'Add some onay'`)
4. Push to the Branch (`git push origin feature/onay`)
5. Open a Pull Request to submit your changes.

We also encourage you to open an issue with the "enhancement" tag if you have any ideas or suggestions that you'd like to discuss with the community.

Thank you for being part of the Onay community and for helping us make a difference!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
# License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->

# Contact

Project Link: [Onay Github](https://github.com/orgs/OnayHQ/repositories)
<br />


### Onay Team


Nelson Galdeman - [@neeel_eth](https://x.com/neeel_eth)
<br />
Diogo - [@diogomartf](https://x.com/diogomartf)
<br />
Leonardo - [@berteotti_](https://x.com/berteotti_)
<br />

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->

# Acknowledgments

We would like to express our gratitude to the following resources that have been invaluable in the development of Onay:

* [Wallet Connect Docs](https://docs.walletconnect.com/)
* [The Graph Docs](https://thegraph.com/docs)
* [Safe Docs](https://safe.global/docs)
* [Gnosis Docs](https://docs.gnosischain.com/)
* [Scroll Docs](https://docs.scroll.io/en/getting-started/overview/)
* [Base Docs](https://docs.base.org/)
* [Polygon zkEVM Docs](https://wiki.polygon.technology/docs/zkevm/)
* [Arbitrum Docs](https://docs.arbitrum.io/)
* [Celo Docs](https://docs.celo.org/)
* [Gnosis Docs](https://docs.gnosis.io/)

These resources have provided valuable insights, tools, and inspiration throughout the development process. We appreciate their contributions to the web development community.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


[contributors-shield]:https://img.shields.io/github/contributors/OnayHQ/onay.svg?style=for-the-badge
[contributors-url]: https://github.com/OnayHQ/onay/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/OnayHQ/onay.svg?style=for-the-badge
[stars-url]:https://github.com/OnayHQ/onay/stargazers
[issues-shield]: https://img.shields.io/github/issues/OnayHQ/onay.svg?style=for-the-badge
[issues-url]: https://github.com/OnayHQ/onay/issues


<!-- SPONSORS -->

[safe-url]:https://safe.global
[safe-img]:https://img.shields.io/badge/safe-12ff80?style=for-the-badge&logo=safe&logoColor=black
[thegraph-url]:https://thegraph.com
[thegraph-img]:https://img.shields.io/badge/thegraph-11112a?style=for-the-badge&logo=TheGraph&logoColor=white
[walletconnect-url]:https://walletconnect.com/
[walletconnect-img]:https://img.shields.io/badge/walletConnect-000000?style=for-the-badge&logo=walletconnect&logoColor=white
[scroll-url]:https://scroll.io/
[scroll-img]:https://img.shields.io/badge/scroll-ffdbb0?style=for-the-badge&logo=scroll&logoColor=white
[gnosis-url]:https://www.gnosis.io/
[gnosis-img]:https://img.shields.io/badge/gnosis-3e6957?style=for-the-badge&logo=gnosis&logoColor=white
[arbitrum-url]:https://arbitrum.io/
[arbitrum-img]:https://img.shields.io/badge/arbitrum-162c4f?style=for-the-badge&logo=arbitrum&logoColor=white
[polygonzkevm-url]:https://polygon.technology/polygon-zkevm
[polygonzkevm-img]:https://img.shields.io/badge/polygon-6f3cc3?style=for-the-badge&logo=polygon&logoColor=white
[celo-url]:https://celo.org/
[celo-img]:https://img.shields.io/badge/celo-fdff52?style=for-the-badge&logo=celo&logoColor=white
[base-url]:https://base.org/
[base-img]:https://img.shields.io/badge/base-0e54ff?style=for-the-badge&logo=base&logoColor=white