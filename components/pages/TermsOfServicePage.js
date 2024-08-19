/* eslint-disable react/no-unescaped-entities */
import Heading from '@ngin-io/components/public/components/Heading/Heading.js';
import Paragraph from '@ngin-io/components/public/components/Paragraph/Paragraph.js';
import TextList from '@ngin-io/components/public/components/TextList/TextList.js';
import Article from '../Article';
import Cell from '../Cell';
import CellContainer from '../CellContainer';
import DisplayHeading from '../DisplayHeading';
import HeaderBlock from '../HeaderBlock';
import Layout from '../Layout';
import Link from '../Link';
import Section from '../Section';
import URLHashList from '../URLHashList';

const TermsOfServicePage = () => {
  return (
    <Layout
      header={
        <HeaderBlock>
          <Section
            size="small"
            backgroundStyle="gradient"
            css={{
              paddingTop: [5, , , 6],
              paddingBottom: [5, , , 6],
              textAlign: 'center',
            }}
          >
            <DisplayHeading as="h1" variant="small" gradient>
              Terms of Service
            </DisplayHeading>
          </Section>
        </HeaderBlock>
      }
    >
      <Section
        align="left"
        backgroundStyle="solid"
        css={{
          paddingBottom: 5,
        }}
      >
        <CellContainer>
          <Cell
            order={1}
            css={{
              display: ['none', , 'flex'],
              width: '40%',
              paddingTop: 3,
            }}
          >
            <URLHashList as="ol">
              <Link href="#what-these-terms-cover">What these Terms cover</Link>
              <Link href="#these-terms-can-change">These Terms can change</Link>
              <Link href="#risk-warning">Risk warning</Link>
              <Link href="#use-of-the-website-and-platform-jurisdictional-limits">
                Use of the Website and Platform: Jurisdictional Limits
              </Link>
              <Link href="#companys-authority">Company's Authority</Link>
              <Link href="#no-australian-financial-services-licence">
                No Australian Financial Services Licence
              </Link>
              <Link href="#who-may-be-a-user-of-the-platform">
                Who May Be a User of the Platform
              </Link>
              <Link href="#liquidity-providers">Liquidity Providers</Link>
              <Link href="#security-of-users-account-information-and-liability-for-its-misuse">
  
                Security of Users' Account Information and Liability for its Misuse
              </Link>
              <Link href="#tokens-are-held-on-your-behalf-and-the-company-limits-its-liability-for-loss-or-theft-of-tokens">
  
                Tokens are held on your behalf and the Company limits its liability for loss or theft of Tokens
              </Link>
              <Link href="#transfers-of-currency-and-tokens">
                Transfers of Currency and Tokens
              </Link>
              <Link href="#execution-policy">Execution Policy</Link>
              <Link href="#fees-and-commissions">Fees and Commissions</Link>
              <Link href="#limitations-on-the-use-of-the-platform">
                Limitations on the Use of the Platform
              </Link>
              <Link href="#the-companys-obligations-and-powers">
                The Company's Obligations and Powers
              </Link>
              <Link href="#users-obligations-and-acknowledgements">
                User's Obligations and Acknowledgements
              </Link>
              <Link href="#intellectual-property">Intellectual Property</Link>
              <Link href="#website-commentary">Website Commentary</Link>
              <Link href="#access-to-the-platform">Access to the Platform</Link>
              <Link href="#liability">Liability</Link>
              <Link href="#termination">Termination</Link>
              <Link href="#governing-law">Governing Law</Link>
              <Link href="#severability">Severability</Link>
              <Link href="#definitions">Definitions</Link>
            </URLHashList>
          </Cell>
          <Cell
            order={0}
            css={{
              width: ['100%', , '55%'],
            }}
          >
            <Article id="what-these-terms-cover">

              <Heading as="h2" variant="h3">1. What these Terms cover</Heading>

              <Paragraph variant="medium">These Terms of Service ("Terms") set out the conditions under which BTC Markets Pty Ltd ACN 164 093 887 (the "Company") offers the use of its trading and payment platform (the "Platform") to Users (Users are described in Section 7 of these Terms and are referred to in these Terms as "Users", "you", "your").</Paragraph>

              <Paragraph variant="medium">Please read these Terms carefully. Your use of the Platform indicates your acceptance of and agreement with these Terms.</Paragraph>

              <Paragraph variant="medium">The Platform, managed by the Company, is an electronic software service for trading cryptographic tokens ("Tokens") with other users of the Platform ("Users"). Users must successfully apply to the Company for a trading account ("Account"), and then log in to their Account, using a password and other account information and depositing Deposited Currency or transferring in Tokens which will be recorded in their Account. Users can then use the Account to place Instructions through the Platform. Access to the Platform is also available offline for Large Instructions by contacting our <Link href="https://support.btcmarkets.net/hc/en-us/requests/new">OTC desk</Link>.</Paragraph>
            </Article>

            <Article id="these-terms-can-change">

              <Heading as="h2" variant="h3">2. These Terms can change</Heading>

              <Paragraph variant="medium">The Company reserves the right, at its sole discretion, to vary these Terms, at any time. The Company will endeavour to notify you of such variations [30] days in advance through your Account or via email, and upon such notification it is your responsibility to review the amended Terms and decide whether to continue using the Platform.</Paragraph>

              <Paragraph variant="medium">You acknowledge that the Company may vary these Terms immediately without notice if it is reasonably necessary to do so for security reasons or to comply with law or regulation or to protect its legitimate business interests.</Paragraph>

              <Paragraph variant="medium">Your continued use of the Platform, including by giving Instructions or entering Transactions, following the posting of changes (including immediate changes made without notice) will mean that you accept and agree to the changes to these Terms. You agree that all subsequent Instructions given by you and Transactions entered by you will be subject to the Terms then in effect.</Paragraph>

              <Paragraph variant="medium">As long as you comply with these Terms as modified from time to time, the Company grants you a personal, non-exclusive, non-transferable, non-sublicensable, limited right to enter and use the Platform.</Paragraph>

              <Paragraph variant="medium">Your acceptance of these Terms, as amended from time to time, gives the Company a mandate to bring together Users to trade on the Platform according to these Terms as well as perform the functions described herein.</Paragraph>
            </Article>

            <Article id="risk-warning">

              <Heading as="h2" variant="h3">3. Risk warning</Heading>

              <Paragraph variant="medium">Holding and trading Tokens carries a high level of risk and may not be suitable for all investors. Before deciding to hold or trade Tokens you should carefully consider your objectives, financial situation, needs and investment experience. The value of Tokens may rise or fall, and will be affected by matters outside of the Company's control. Tokens can also be lost by unauthorised access, system failure or fraud. By trading or holding Tokens, you could lose all of your invested funds.</Paragraph>

              <Paragraph variant="medium">The User confirms that in using the Platform and holding and transacting in Tokens, it fully understands the following risks:</Paragraph>
              <TextList
                as="ol"
                css={{ '> li': { listStyleType: 'lower-alpha' } }}
              >
                <Paragraph as="li" variant="medium">
    
                  <strong>Volatility Risk:</strong> The value of Tokens may rise or fall. The value of Tokens is affected by factors outside of the control of the Company. In particular:
                  <TextList
                    as="ol"
                    css={{ li: { listStyleType: 'lower-roman' } }}
                  >
      
                    <Paragraph as="li" variant="medium">Token prices are not set by the Company and the Company does not guarantee that any price offered by Users of the Platform reflects the prevailing market rate;</Paragraph>
      
                    <Paragraph as="li" variant="medium">The value of Tokens may be affected by new Tokens being created or developed or other forms of digital currencies or similar commodities being developed;</Paragraph>
      
                    <Paragraph as="li" variant="medium">Token prices offered by Users can deviate significantly from the prevailing market rate ("off-market pricing") due to technology errors, volatility, Token scarcity, or trading behaviour of a User; and</Paragraph>
                  </TextList>
                </Paragraph>
                <Paragraph as="li" variant="medium">
    
                  <strong>Liquidity Risk:</strong> Tokens may not be transferrable for value or accepted for transfer for value or payment of goods and services by any third party; and
                </Paragraph>
                <Paragraph as="li" variant="medium">
    
                  <strong>System or hardware failure, Unauthorised Access or Fraud Risk:</strong> Tokens, Deposited Currency and/or other data held by the Company on your behalf may be lost if you or the Company or any third party holding the Tokens on behalf of the Company is subject to System or hardware failure, unauthorised access or a fraud event, and in general you bear the risk of that loss; and
                </Paragraph>
                <Paragraph as="li" variant="medium">
    
                  <strong>Counterparty risk:</strong> The company holds Tokens on your behalf and you only hold a beneficial interest in them. There is a risk that the Company become insolvent or subject to losses which may jeopardise its ability to deliver to you some or all of the value of your Tokens or repay to you Deposited Currency.
                </Paragraph>
              </TextList>
            </Article>

            <Article id="use-of-the-website-and-platform-jurisdictional-limits">
              <Heading as="h2" variant="h3">
                4. Use of the Website and Platform: Jurisdictional Limits
              </Heading>

              <Paragraph variant="medium">With the exception of some Liquidity Providers and Approved Overseas Users, the Platform is available only to Australian residents and is not intended to be offered or made available to any person who resides outside of Australia.</Paragraph>

              <Paragraph variant="medium">The information in this website and the use of the Platform is not intended for any person who is not an Australian resident and is not made available to any person in any jurisdiction where its distribution or use would be contrary to any law or regulation. Nothing in this website or the Platform should be considered an offer or solicitation to buy or sell any service or product to any person in any jurisdiction where such offer or solicitation would be unlawful.</Paragraph>

              <Paragraph variant="medium">With the exception of liquidity providers sourced and verified by the Company, the Platform is available only to Australian Users and is not intended to be offered or made available to any person who resides outside of Australia.</Paragraph>
            </Article>

            <Article id="companys-authority">

              <Heading as="h2" variant="h3">5. Company's Authority</Heading>

              <Paragraph variant="medium">The User authorises the Company (including where necessary as the User’s agent) to:</Paragraph>
              <TextList as="ol" css={{ li: { listStyleType: 'lower-roman' } }}>
  
                <Paragraph as="li" variant="medium">match the User's Instructions to buy or sell the specified Tokens at the price nominated by the User against Instructions from other Users. Upon matching, all Transactions will be subject to settlement and delivery, and any Instruction is irrevocable authority from the User to the Company to settle the Transaction by transferring Deposited Currency or Tokens in which the User has a beneficial interest and to deduct any Commission or Fee or other amount owing to the Company or a third party under these Terms or for any other reason, including in a situation where off-market pricing has occurred;</Paragraph>
  
                <Paragraph as="li" variant="medium">transfer some or all of the Tokens in which the User has a beneficial interest into or out of secure storage, in accordance with the Company’s internal risk management policies;</Paragraph>
  
                <Paragraph as="li" variant="medium">take any steps that the Company deems reasonably necessary to ensure that the economic value held by any User in their account is maintained and/or secure; and</Paragraph>
  
                <Paragraph as="li" variant="medium">hold Tokens on the User’s behalf.</Paragraph>
  
                <Paragraph as="li" variant="medium">nominate a third party to receive Digital Currency</Paragraph>
              </TextList>
            </Article>

            <Article id="no-australian-financial-services-licence">
              <Heading as="h2" variant="h3">
                6. No Australian Financial Services Licence
              </Heading>

              <Paragraph variant="medium">The Company is not licensed as an Australian Financial Services Licensee and it does not offer general or personal financial product advice. Nothing in this website is intended to be or should be taken as financial, legal or taxation advice. Users should seek their own financial, legal, tax and accounting advice as to the likely outcomes for trading Tokens.</Paragraph>
            </Article>

            <Article id="who-may-be-a-user-of-the-platform">

              <Heading as="h2" variant="h3">7. Who May Be a User of the Platform</Heading>

              <Paragraph variant="medium">Subject to clause 4, a User must be an Australian resident individual, partnership or company (including one acting in the capacity of a trustee) which has met the Company's Account opening procedures, including, if required, any client verification procedures, and which is authorized to use the Platform by the Company.</Paragraph>

              <Paragraph variant="medium">The Company retains absolute discretion in determining who may be a User of the Platform and may cease to allow a User to transact through the Platform at any time without prior notification. The Company shall have absolute discretion in accepting or rejecting an application to be a User or any Instruction.</Paragraph>

              <Paragraph variant="medium">Users agree to provide the Company with accurate, current and complete information about themselves as prompted by the registration process, and to update the Company if such information changes.</Paragraph>
            </Article>

            <Article id="liquidity-providers">

              <Heading as="h2" variant="h3">8. Liquidity Providers</Heading>

              <Paragraph variant="medium">The Company may allow a User to be a Liquidity Provider for transactions on the Company's Platform. A user who is a Liquidity provider need not be an Australian resident. If a User is a Liquidity Provider, any buy or sell instructions that the liquidity provider makes available (whether via its agents or otherwise) to the Platform are considered Instructions for the purposes of these Terms. Users can only be Liquidity Providers if the Company expressly consents.</Paragraph>
            </Article>

            <Article id="security-of-users-account-information-and-liability-for-its-misuse">
              <Heading as="h2" variant="h3">
  
                9. Security of Users' Account Information and Liability for its Misuse
              </Heading>

              <Paragraph variant="medium">Users are responsible for maintaining the confidentiality and security of their Account information, including their password, and for checking that all activity including Instructions and Transactions which occur on their Account was authorised by them. Users agree to notify the Company immediately by email of any unauthorised use of their Account or password, or any other breach of security. The Company will not be liable for any loss a User may incur as a result of unauthorized use of that User's Account's information including password.</Paragraph>

              <Paragraph variant="medium">Users are liable for losses incurred by the Company or any other User of the Platform due to any unauthorized use of the User’s Account or Account information. Users shall not use or access any Account other than their own at any time. Users may not attempt to gain unauthorized access to the Platform, and any attempt to do so or to assist others (Users or otherwise) to do so, or distribution of instructions, software or tools for that purpose, will result in the accounts of such Users being terminated. This does not limit the right of the Company to take any other action against you.</Paragraph>

              <Paragraph variant="medium">Users may not create or use more than one Account, or open an account on behalf of another (for the avoidance of doubt, this does not prevent an individual from opening an account on behalf of a company provided that individual has authority to do so). If a User would like to open more than one Account, the User may request permission from the Company, prior to the opening of multiple Accounts. Permission will be granted or withheld in the Company’s absolute discretion.</Paragraph>

              <Paragraph variant="medium">The creation or use of multiple Accounts without obtaining such prior express permission from the Company will lead to the immediate suspension of all User Accounts on the Platform, as well as all pending trades.</Paragraph>

              <Paragraph variant="medium">A User's ability to deposit and withdraw Deposited Currency or Tokens into or from its Account may be regulated by anti-money laundering and counter-terrorism financing laws including the <em>Anti-Money Laundering - Counter Terrorism Financing Act 2006</em> (Cth) and its rules and regulations. The Company may restrict Instructions or Transactions that may violate those laws or its internal AML/CTF policies. The Company's AML/CTF policy is located on its website. The Company may restrict any Transaction that is flagged as a suspicious activity by the Company's internal processes and/or file suspicious-activity reports on flagged Transactions.</Paragraph>

              <Paragraph variant="medium">All Deposited Currency credited to a User's Account will be maintained in trust in a bank account with a reputable Australian deposit-taking institution under the Company's name or in the name of a custodian or third party appointed by the Company. Such account may be segregated for each User or may be a pooled account containing funds of multiple Users of the Company's products. The Company retains absolute discretion to determine whether to use segregated or pooled accounts and the Company retains the right to switch between segregated or pooled accounts without approval from a User. However, if the Company maintains User Accounts in a pooled account, it will ensure that proper procedures are maintained at all times to identify the assets of each User. Regardless of whether pooled or segregated accounts are used, at no time will the Company mix its own funds with funds held on behalf of Users.</Paragraph>

              <Paragraph variant="medium">You waive any right to interest paid by the Bank with respect to your Deposited Currency, The Company is entitled to retain that interest, if any is paid.</Paragraph>

              <Paragraph variant="medium">Deposited Currency recorded in User Accounts may be exchanged for Tokens upon a User entering into Transactions through the Platform. The Tokens recorded in a User's Account may only be transferred to other Users in execution of a Transaction entered into on the Platform.</Paragraph>
            </Article>

            <Article id="tokens-are-held-on-your-behalf-and-the-company-limits-its-liability-for-loss-or-theft-of-tokens">
              <Heading as="h2" variant="h3">
  
                10. Tokens are held on your behalf and the Company limits its liability for loss or theft of Tokens
              </Heading>

              <Paragraph variant="medium">Tokens are held by the Company on a User's behalf and the Company holds legal title in the Tokens. The User is the beneficial owner of the number and type of Tokens which are recorded in the User's Account. The Company will maintain strict procedures to ensure that the correct number of Tokens is recorded as the property of the relevant User, as well as adopting reasonable security measures to reduce the risk of Tokens being misused, misplaced, misappropriated or stolen.</Paragraph>

              <Paragraph variant="medium">The company’s liability for the loss or theft of any Tokens of which the User is the beneficial owner is limited as set out in clause 20. In addition the Company has no liability to a User for any loss or theft of Tokens which arises from any unauthorised use of the User’s Account or Account information.</Paragraph>
            </Article>

            <Article id="transfers-of-currency-and-tokens">

              <Heading as="h2" variant="h3">11. Transfers of Currency and Tokens</Heading>

              <Paragraph variant="medium">The User may deposit Deposited Currency into their Account by way of direct bank transfer or BPAY. Deposits made via BPAY are subject to the BPAY terms and conditions, including any fees levied by BPAY.</Paragraph>

              <Paragraph variant="medium">Deposits and withdrawals of Deposited Currency made by way of bank transfer are subject to the relevant bank's transfer terms and conditions, timing and processes and Users should allow for these when making or requesting such transfers.</Paragraph>

              <Paragraph variant="medium">Deposits of non-Australian Deposited Currency will incur foreign exchange transaction fees, which will automatically be deducted from the Deposited Currency.</Paragraph>

              <Paragraph variant="medium">Deposits and withdrawals of Tokens are made within the Platform. Upon signup, the Platform designates a Token deposit address for each User, which is specified by reference to Token type (e.g. Bitcoin or Litecoin). A User will be able to send Company-approved Token types to this designated deposit address. Users must not disclose their designated deposit address to any person other than when transferring Tokens to or from their Account. For security reasons, a new deposit address is issued for each Token transfer. Each deposit address ultimately points to the User's Account.</Paragraph>
              <Paragraph variant="medium">Users acknowledge that:</Paragraph>
              <TextList>
  
                <Paragraph as="li" variant="medium">The networks by which Token transfers occur are operated by third parties and are outside of the Platform. The Company gives no guarantee of and takes no liability for the security of the Token transfer networks. Losses of Tokens may occur due to use of a Token transfer network which are outside the control of the Company and the company limits its liability for any such losses in clause 19;</Paragraph>
  
                <Paragraph as="li" variant="medium">The speeds of the Token transfer networks are outside the control of the Company. It may take some days for a transfer of Tokens to a User's Account (deposit) to be received by the Platform, or for a transfer of Tokens from a User's Account (withdrawal) to be effected. The Company is not liable for any consequences of failures of Token deposits or withdrawals to be effected in a timely manner.</Paragraph>
              </TextList>

              <Paragraph variant="medium">The Company is not obliged to accept any deposit of Tokens or Deposited Currency to any Account.</Paragraph>
            </Article>

            <Article id="execution-policy">

              <Heading as="h2" variant="h3">12. Execution Policy</Heading>

              <Paragraph variant="medium">In general, the Company will execute Instructions in the order in which they are placed by Users, but having regard to the price at which the Instruction is placed. However, the Company reserves the right to put Instructions on hold, or only fill them in part. This would usually occur where the Instruction is large and/or there is insufficient demand from other Users to transact in that volume or at that price, or in the event of an error or off-market pricing.</Paragraph>
            </Article>

            <Article id="fees-and-commissions">

              <Heading as="h2" variant="h3">13. Fees and Commissions</Heading>

              <Paragraph variant="medium">The User acknowledges that the Company may charge fees in respect of the Account ("Fees") and commissions on Transactions ("Commissions"). Such Fees and Commissions are set out on the Company's website and may be updated from time to time by the Company. Any updated Fees and Commissions apply from the date that the updated Fees and Commissions are set out on the Company's website. The Company will endeavour to notify Users through their User Accounts at least two business days in advance of any changes to Fees or Commissions.</Paragraph>

              <Paragraph variant="medium">The Company is authorized to deduct from the proceeds of any Transaction or from a User's Account the Commission payable in respect of any Transaction and any other Fees levied upon the User's Account.</Paragraph>

              <Paragraph variant="medium">Please see the <Link href="/fees">Fees</Link> page for our current Fees and Commissions.</Paragraph>
            </Article>

            <Article id="limitations-on-the-use-of-the-platform">
              <Heading as="h2" variant="h3">
                14. Limitations on the Use of the Platform
              </Heading>

              <Paragraph variant="medium">The Company in its absolute and sole discretion may:</Paragraph>
              <TextList>
  
                <Paragraph as="li" variant="medium">restrict the number of open Instructions a User may have on the Platform at any one time;</Paragraph>
  
                <Paragraph as="li" variant="medium">restrict the ability of a User to change or cancel a posted Instruction at any time;</Paragraph>
  
                <Paragraph as="li" variant="medium">periodically define the incremental values for Instructions on the Platform; and</Paragraph>
  
                <Paragraph as="li" variant="medium">cancel in whole or in part Instructions that do not adhere to these limitations.</Paragraph>
              </TextList>
            </Article>

            <Article id="the-companys-obligations-and-powers">
              <Heading as="h2" variant="h3">
                15. The Company's Obligations and Powers
              </Heading>

              <Paragraph variant="medium">The Company warrants and represents that:</Paragraph>
              <TextList>
  
                <Paragraph as="li" variant="medium">It will use all reasonable care and skill in facilitating the matching of Instructions of the Users via the Platform to facilitate Transactions.</Paragraph>
  
                <Paragraph as="li" variant="medium">The trading price for a Transaction is calculated on the basis of actual matched offers made by other Users participating in the bidding process on the Platform combined with the Company's applicable commission (if any). The Company does not set, and takes no responsibility for, the price of Tokens traded on the Platform, except in the case of Large Transactions.</Paragraph>
  
                <Paragraph as="li" variant="medium">It shall comply with the laws and regulations relating to offering the Platform in Australia.</Paragraph>
              </TextList>

              <Paragraph variant="medium">The Company does not warrant or represent that:</Paragraph>
              <TextList>
  
                <Paragraph as="li" variant="medium">its website or the Platform is free from errors, viruses, worms or other technical anomalies which may cause problems or damage to User's own computer hardware or software; or</Paragraph>
  
                <Paragraph as="li" variant="medium">its security systems are impregnable, although the Company does take reasonable measures to ensure the Platform and all of the Company's systems are reasonably secured and protected against attack.</Paragraph>
              </TextList>

              <Paragraph variant="medium">The Company in its absolute and sole discretion may engage a Liquidity Provider to facilitate and maintain availability of Tokens and the stability of trading on the Platform from time to time and be a User of the Platform.</Paragraph>

              <Paragraph variant="medium">In the case of fraud or other suspicious activities, the Company will report all necessary information, including names, addresses and all other requested information, to the relevant authorities dealing with fraud and breaches of the law.</Paragraph>
            </Article>

            <Article id="users-obligations-and-acknowledgements">
              <Heading as="h2" variant="h3">
                16. User's Obligations and Acknowledgements
              </Heading>

              <Paragraph variant="medium">The User acknowledges that once an Instruction is placed it is irrevocable by the User, and once a Transaction is matched, it will proceed to settlement and delivery through the Platform unless the Company purges the Transaction. The User acknowledges that, when a Transaction is entered, the Platform adjusts the records of Tokens and Deposited Currency in the buyer's and the seller's respective Accounts.</Paragraph>

              <Paragraph variant="medium">It is the User's responsibility to hold, and the User undertakes to ensure that it holds, sufficient Deposited Currency and/or Tokens in its Account to meet its settlement obligations and any other liabilities arising from any Transaction, including sufficient Deposited Currency to meet the Commission. In addition, the User undertakes to ensure that it retains in its Account sufficient Deposited Currency to meet any regular Fees payable on the Account.</Paragraph>

              <Paragraph variant="medium">The User represents and warrants that:</Paragraph>
              <TextList>
  
                <Paragraph as="li" variant="medium">it will only operate an Account and use the Platform to perform trades of Tokens in accordance with the conditions set forth in these Terms;</Paragraph>
  
                <Paragraph as="li" variant="medium">it is duly authorized and has the capacity to provide each Instruction and enter into each Transaction on the Platform;</Paragraph>
  
                <Paragraph as="li" variant="medium">it is a resident of Australia (except in the case of a Company-approved Liquidity Provider) or Approved Overseas User.</Paragraph>
  
                <Paragraph as="li" variant="medium">it will comply with all applicable laws of Australia and any other jurisdiction in which or from which it seeks to operate its Account, give Instructions or enter Transactions;</Paragraph>
  
                <Paragraph as="li" variant="medium">all amounts deposited into its Account (other than through Transactions), whether as Tokens or Deposited Currency, come from legal sources which the User owns or otherwise has full legal authority to deal with; and</Paragraph>
  
                <Paragraph as="li" variant="medium">the User's use of the Platform, provision of Instructions or entering any Transaction does not infringe the rights of any third party or any applicable law;</Paragraph>
  
                <Paragraph as="li" variant="medium">the User understands that their Account may be frozen at any time at the request of any government authority investigating a fraud or other suspicious activity; and</Paragraph>
  
                <Paragraph as="li" variant="medium">the User understands that loss of Tokens and/or Deposited Currency held on behalf of Users and data referring to or belonging to Users may occur.</Paragraph>
              </TextList>
              <Paragraph variant="medium">The User will not:</Paragraph>
              <TextList>
  
                <Paragraph as="li" variant="medium">use the Platform to perform any illegal activity of any sort, including, but not limited to, money laundering or terrorism financing;</Paragraph>
  
                <Paragraph as="li" variant="medium">use the Platform to perform payment of any ransomware, including, but not limited to cryptolocker; or</Paragraph>
  
                <Paragraph as="li" variant="medium">give any Instruction or enter any Transaction, or do or undertake any other activity, whether or not through the Platform, which would or may negatively affect the performance of the Platform or the reputation of the Company.</Paragraph>
              </TextList>

              <Paragraph variant="medium">The User is responsible for any tax liability arising from its holding or Transactions in Tokens and will indemnify the Company where the Company is obliged to pay tax on behalf of the User in respect of the User's Account or any Token held, or bought or sold by the User.</Paragraph>
            </Article>

            <Article id="intellectual-property">

              <Heading as="h2" variant="h3">17. Intellectual Property</Heading>

              <Paragraph variant="medium">All intellectual property rights vested in texts, images or any other content found on or related to the Platform are owned by the Company. Accordingly, Users may not copy, distribute, reproduce, republish, upload, transmit, modify, post, frame-in or otherwise use in any way any such content without the prior express written authorization of the Company.</Paragraph>

              <Paragraph variant="medium">The Company's property or that of our vendors or licensors is protected by patent, trademark and/or copyright laws of Australia and may not be used without the Company's express written consent.</Paragraph>

              <Paragraph variant="medium">The Company may take any action available in law or equity to protect its intellectual property and to remedy any breach or potential breach of its rights, including by seeking an injunction to prevent a breach of its rights.</Paragraph>
            </Article>

            <Article id="website-commentary">

              <Heading as="h2" variant="h3">18. Website Commentary</Heading>

              <Paragraph variant="medium">The website may include commentary and information on Tokens, the market for Tokens, uses for Tokens and other information, interactive tools, quotes, reports and data concerning Tokens and trading in Tokens and other subject matter. Some of this information may be supplied by entities not affiliated with the Company ("Third Party Information"). To the maximum extent possible, the Company will identify and attribute all information sourced from third parties. </Paragraph>

              <Paragraph variant="medium">The Company does not explicitly or implicitly endorse or approve the Third Party Information. While the Company takes reasonable steps to ensure that the Third Party Information on its website is correct and up to date, the Company does not verify or validate such information and takes no responsibility for its content or any consequence of any person placing reliance on the Third Party Information. </Paragraph>
            </Article>

            <Article id="access-to-the-platform">

              <Heading as="h2" variant="h3">19. Access to the Platform</Heading>

              <Paragraph variant="medium">The Company takes reasonable steps to keep its Platform operational. However, the Company does not warrant, guarantee or represent that:</Paragraph>
              <TextList>
  
                <Paragraph as="li" variant="medium">there will be operational stability, availability or continuation of the Platform or the website;</Paragraph>
  
                <Paragraph as="li" variant="medium">users of the Platform and/or any Liquidity Provider engaged by the Company will remain stable, reliable, secure, solvent or error-free;</Paragraph>
  
                <Paragraph as="li" variant="medium">the Platform or the website is safe from unauthorised access, fraud or other suspicious or illegal activity; or</Paragraph>
  
                <Paragraph as="li" variant="medium">there will be a continuation of the agreement formed under these Terms.</Paragraph>
              </TextList>
              <Paragraph variant="medium">In addition, the Company warns you that the Platform and the website may be inaccessible at times due to:</Paragraph>
              <TextList>
  
                <Paragraph as="li" variant="medium">down time and maintenance;</Paragraph>
  
                <Paragraph as="li" variant="medium">internet, network or server problems;</Paragraph>
  
                <Paragraph as="li" variant="medium">equipment failure, including the failure of third party systems; or</Paragraph>
  
                <Paragraph as="li" variant="medium">a Force Majeure Event.</Paragraph>
              </TextList>
            </Article>

            <Article id="liability">

              <Heading as="h2" variant="h3">20. Liability</Heading>

              <Paragraph variant="medium">The User indemnifies the Company and each of its directors, officers, shareholders, advisers, consultants, agents and contractors (each a "Company Indemnitee") against all liabilities, claims, losses and expenses ("Losses") which may be incurred or suffered by the Company Indemnitee directly or indirectly arising out of any failure by the User to maintain sufficient Deposited Currency or Tokens in its Account or otherwise for failing to meet its obligations under these Terms. Such Losses may include legal fees incurred in defending or responding to such Losses and consequential losses. This indemnity will apply regardless of whether an Instruction or Transaction was entered in error, but will not apply to the extent that Losses were incurred or suffered by a Company Indemnitee due to its own fraud or wilful default.</Paragraph>

              <Paragraph variant="medium">All statutory or implied terms are excluded to the extent permitted by law. Users may have rights against the Company under statutory implied terms which cannot legally be excluded. To the extent permitted by law, the Company’s liability to the User under any statutory implied terms which cannot legally be excluded is limited to supplying relevant services again, or paying the cost of having the relevant services supplied again.</Paragraph>

              <Paragraph variant="medium">The following exclusions and limitations of liability are subject to any liability the Company has to the User under statutory implied terms or other statutory rights which cannot legally be excluded.</Paragraph>

              <Paragraph variant="medium">To the full extent permitted by law, the Company is not liable for any damages, losses, costs, loss of profit, loss of revenue, loss of business, loss of opportunity, loss of data, loss of Tokens or Deposited Currency or any other direct, indirect or consequential loss to any person including the User arising out of any use of the Platform, the Company acting or failing to act on any Instruction, any Transaction, any failure of the Platform, any error or failure or lack of any security measures by the Company or any third party including in relation to storage or transfer of Tokens by or on behalf of the Company or for any other reason, except to the extent the loss is directly caused by the Company's fraud or wilful default. The Company shall not be liable for any loss as a result of cancelling in whole or in part a User's Instructions. </Paragraph>

              <Paragraph variant="medium">The Company will not be liable for any malfunction, breakdown, delay or interruption to the Internet connection, or if for any reason the Platform is unavailable at any time or for any period. </Paragraph>

              <Paragraph variant="medium">Where the Company's website contains links to other sites and resources provided by third parties, these links are provided for your information only. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them.</Paragraph>

              <Paragraph variant="medium">Subject to the foregoing, the Company's aggregate liability in respect of claims based on events arising out of or in connection with a User's use of the Platform, whether in contract or tort (including negligence) or otherwise, shall in no circumstances exceed the greater of either (a) the total amount held in the User's Account for the User making a claim, less any amount of commission that may be due and payable to the Company in respect of such account; or (b) 125% of the value of the Transaction(s) that are the subject of the claim, less any amount of Commission that may be due and payable to the Company in respect of such Transaction(s).</Paragraph>
            </Article>

            <Article id="termination">

              <Heading as="h2" variant="h3">21. Termination</Heading>

              <Paragraph variant="medium">A User may close its Account at any time by notification to the Company in the form determined by the Company.</Paragraph>

              <Paragraph variant="medium">The Company may suspend or terminate a User's Account at any time immediately upon written notice to the User for any reason, including without limitation for: (1) attempts to gain unauthorized access to the Platform or another User's Account or providing assistance to others attempting to do so; (2) overcoming software security features limiting use of or protecting any content; (3) using the Platform to perform illegal activities such as money laundering, terrorism financing, paying of ransomware, online gambling or other criminal activities; (4) violations of these Terms; (5) failure to pay or fraudulent payment for Transactions; (6) unexpected operational difficulties; or (7) requests by law enforcement or other government agencies; (8) Abusive behaviour.</Paragraph>

              <Paragraph variant="medium">The Company may by notice to Users discontinue or modify the Platform and/or revise or terminate these Terms at any time in accordance with these Terms. Users are deemed to have accepted these revisions or termination to the extent that they continue using the Platform.</Paragraph>

              <Paragraph variant="medium">Subject to these Terms and applicable laws, within 60 days of closure of a User's Account, whether by the User or the Company, the Company must (insofar as it is possible):</Paragraph>
              <TextList>
  
                <Paragraph as="li" variant="medium">In respect of any Deposited Currency held in the User's Account, pay to the User's nominated bank account the amount of the Deposited Currency; and</Paragraph>
  
                <Paragraph as="li" variant="medium">In respect of any Token held in the User's Account, in its absolute discretion either:
                  <TextList>
      
                    <Paragraph as="li" variant="medium">transfer the Tokens to the User or a person nominated by the User (which may be another Token trading platform provider); or</Paragraph>
      
                    <Paragraph as="li" variant="medium">sell the Tokens at the prevailing market price and pay the amount raised to the User's nominated bank account.</Paragraph>
                  </TextList>
                </Paragraph>
              </TextList>

              <Paragraph variant="medium">The Company is entitled to retain from any amounts (whether Token or Deposited Currency) which may otherwise be payable to the User on closure of its Account any amount payable by the User to the Company, including as Fees or Commissions on sale of Tokens under 2 above. The Company may be legally limited in the values it may refund over a certain period of time and a User shall not hold the Company liable for an inability to refund all values as expeditiously as the User may desire.</Paragraph>

              <Paragraph variant="medium">In the event the Company has made reasonable efforts to obtain instructions from the User as to where to transfer any Deposited currency or Tokens in a closed Account but is unable to obtain such instructions or is unable to transfer as instructed the Deposited Currency and/or the Tokens held in the User’s Account or otherwise held by the Company on behalf of the User, due to no fault of the Company, within 120 days of closure of a User’s Account, ownership of the Deposited Currency and the Tokens will transfer to the Company.</Paragraph>

              <Paragraph variant="medium">The User also agrees that the Company may, in its sole discretion by giving notice, terminate Users' access to the Platform, prohibit access to the Platform and its content, services and tools, delay or remove hosted content, and take technical and legal steps to prevent the User's access to the Platform if the Company, in its exclusive discretion, believes that the User has breached or may breach these Terms or is otherwise acting inconsistently with the intentions of these Terms.</Paragraph>

              <Paragraph variant="medium">The Company reserves the right to terminate Accounts that have been inactive for a period of 6 months or more.</Paragraph>

              <Paragraph variant="medium">Notwithstanding any suspension or termination of a User's Account, the User remains liable for all Fees and Commissions payable in respect of the Account or any Transaction entered prior to the suspension or termination.</Paragraph>
            </Article>

            <Article id="governing-law">

              <Heading as="h2" variant="h3">22. Governing Law</Heading>

              <Paragraph variant="medium">These Terms and User's use of the website and the Platform will be governed by the laws of Victoria, Australia. All Users submit to the non-exclusive jurisdiction of the courts of Victoria.</Paragraph>
            </Article>

            <Article id="severability">

              <Heading as="h2" variant="h3">23. Severability</Heading>

              <Paragraph variant="medium">If any provision of these Terms is deemed invalid or unenforceable by a court of competent jurisdiction, the provision will be enforceable to the maximum extent permissible and the remaining provisions remain in full force and effect.</Paragraph>
            </Article>

            <Article id="definitions">

              <Heading as="h2" variant="h3">24. Definitions</Heading>
              <Paragraph variant="medium">In these Terms:</Paragraph>
              <TextList>
  
                <Paragraph as="li" variant="medium">Abusive behaviour includes the use of abusive or threatening language or behaviour, whether by email or otherwise.</Paragraph>
  
                <Paragraph as="li" variant="medium">Account means a User's account maintained by the Company, which allows (among other things) the User to record, trade, receive and withdraw Tokens.</Paragraph>
  
                <Paragraph as="li" variant="medium">Account balance means the total of fiat currency and Tokens that appears in the User's Account.</Paragraph>
  
                <Paragraph as="li" variant="medium">Approved Overseas User means a User that is not a resident of Australia who is accepted by the Company as a User.</Paragraph>
  
                <Paragraph as="li" variant="medium">Beneficial interest means the right to use and sell the Tokens but is not the same as having legal title in the Tokens.</Paragraph>
  
                <Paragraph as="li" variant="medium">Beneficial owner means the person who has the beneficial interest. You are the Beneficial owner of the number and type of Tokens which are recorded in your Account, because the Company is holding those Tokens on your behalf and for your benefit.</Paragraph>
  
                <Paragraph as="li" variant="medium">Business day means a day that is not a Saturday or a Sunday or any other day which is a public holiday or a bank holiday in Australia.</Paragraph>
  
                <Paragraph as="li" variant="medium">Deposited Currency means the authorized currency of Australia or such other sovereign nation as is acceptable to the Company and held in a User's Account.</Paragraph>
  
                <Paragraph as="li" variant="medium">Commission means an amount levied as payment to the Company for arranging and matching a Transaction. A Commission is generally levied as a percentage of the value of a Transaction.</Paragraph>
  
                <Paragraph as="li" variant="medium">Fee means an amount levied by the Company in relation to a User's Account. It may be levied against a particular User's Account or in respect of a class of Accounts or across all Accounts. Fees may also be levied in respect of specific services provided to Users.</Paragraph>
                <Paragraph as="li" variant="medium">
                  Force Majeure Event means:
                  <TextList>
      
                    <Paragraph as="li" variant="medium">any act, event or occurrence (including without limitation any strike, riot or civil commotion, act of terrorism, war, industrial action, acts and regulations of any governmental or supra national bodies or authorities) that, in the Company’s opinion, prevents it from maintaining the Platform;</Paragraph>
      
                    <Paragraph as="li" variant="medium">any breakdown or failure of transmission, communication or computer facilities, interruption of power supply, or electronic or communications equipment failure;</Paragraph>
      
                    <Paragraph as="li" variant="medium">any unauthorised access, suspicious activity or other interference in respect of the Platform; or</Paragraph>
      
                    <Paragraph as="li" variant="medium">the failure of any relevant supplier, financial institution or agent that, in the Company’s opinion, prevents it from maintaining the Platform or otherwise performing its obligations.</Paragraph>
                  </TextList>
                </Paragraph>
  
                <Paragraph as="li" variant="medium">Instruction mean offer to buy or offer to sell Tokens through the Platform at the price, if any, nominated in such Instruction plus any applicable Commission.</Paragraph>
  
                <Paragraph as="li" variant="medium">Large Instruction means an Instruction that the Company wishes to match with a Liquidity Provider due to its size. Contact us here to undertake a Large Instruction.</Paragraph>
  
                <Paragraph as="li" variant="medium">Liquidity Provider means a person or entity who provides liquidity, pricing or other related services (in either or both buy and sell Transactions), and has entered into a LP Agreement with the Company.</Paragraph>
  
                <Paragraph as="li" variant="medium">LP Agreement means an agreement between the Company and the Liquidity Provider whereby the Liquidity Provider agrees to provide Token Liquidity to the Company, on the terms set out in the LP Agreement.</Paragraph>
  
                <Paragraph as="li" variant="medium">Platform means the BTC Markets website and associated software which facilitates Instructions and Transactions.</Paragraph>
  
                <Paragraph as="li" variant="medium">Sanctions law means the <em>Charter of the United Nations Act 1945, Autonomous Sanctions Act 2011</em>, associated rules and other instruments.</Paragraph>
  
                <Paragraph as="li" variant="medium">Token Liquidity means the Tokens to be provided by the Liquidity Provider to the Company, on the terms set out in the LP Agreement.</Paragraph>
  
                <Paragraph as="li" variant="medium">Transaction means the purchase or sale of Tokens arising from an Instruction.</Paragraph>
              </TextList>
            </Article>
          </Cell>
        </CellContainer>
      </Section>
    </Layout>
  );
};

export default TermsOfServicePage;
