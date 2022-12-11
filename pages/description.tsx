import Layout from '../components/layout'
import {
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
  Show,
  Code,
  UnorderedList,
  ListItem,
  OrderedList,
} from '@chakra-ui/react'
import UseCase from '../components/landing/usecase'
import { GetStaticProps, NextPage } from 'next'
import localFont from '@next/font/local'
const SFFont = localFont({ src: '../public/fonts/SFMono-Regular.woff2' })
const PrimeFont = localFont({ src: '../public/fonts/Prime-Regular.woff2' })
const TenikaFont = localFont({ src: '../public/fonts/Tenika-Regular.woff2' })
const TimeburnerFont = localFont({ src: '../public/fonts/Timeburner-Regular.woff2' })

export const getStaticProps: GetStaticProps = async (_context) => {
  return {
    props: {},
  }
}

const WhatIsWoolballPage: NextPage = ({}) => {
  return (
    <Layout>
      <Stack
        pt={{ base: 6, sm: 8, md: 16, lg: 24, xl: 28 }}
        mb={{ base: 1 }}
        direction={'column'}
        alignItems="stretch"
        align="flex-start"
        maxW="4xl"
        spacing={{ base: 6, lg: 10 }}
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '5xl', sm: '6xl', lg: '7xl' }}
        >
          <Text
            className={TenikaFont.className}
            fontSize={{ base: '32px', sm: '48px', lg: '80px' }}
            lineHeight={{ base: '40px', sm: '56px', lg: '80px' }}
            as={'span'}
            position={'relative'}
          >
            What is Woolball?
          </Text>
        </Heading>
        <Text
          className={TenikaFont.className}
          fontSize={{ base: '16px', sm: '24px', md: '32px', lg: '40px' }}
          lineHeight={{ base: '24px', sm: '30px', md: '40px', lg: '48px' }}
        >
          Woolball is a next-generation naming system, a linking (and naming) service with native focus on links, in addition to names.
        </Text>
        <Show above={'lg'}>
          <Flex
            justify={'center'}
            align={'start'}
            position={'relative'}
            h={'10px'}
          >
            <Image
              align={'start'}
              maxWidth={1000}
              position={'absolute'}
              top={-400}
              left={700}
              zIndex={-1}
              src={'/images/what-is-woolball-bg-2.png'}
              alt={'what-is-woolball-logo'}
            />
          </Flex>
        </Show>
        <Stack
          direction={'column'}
          alignItems="stretch"
          align="flex-start"
          maxW="3xl"
          spacing={{ base: 4, lg: 6 }}
          fontSize={{ base: '18px', sm: '20px' }}
          lineHeight={{ base: '22px', sm: '28px' }}
        >
          <Heading as="h2" size={{ base: 'lg', md: 'xl' }}>
            <Text className={TenikaFont.className}>1. Introducing Woolball: A Next-Gen Naming System for Web3</Text>
          </Heading>
          <Text>
            We introduce Woolball, a next-generation naming system that enables links between
            names.
          </Text>

          <Text>
            These links create a new kind of name system with an internal social
            structure. It yields without any extra effort
          </Text>
          {/* <SimpleGrid
            columns={{ base: 1 }}
            spacing={{ base: 2, md: 4, lg: 6 }}
            color={'black'}
            fontSize={{ base: '16px', sm: '18px', lg: '22px' }}
            lineHeight={{ base: '24px', sm: '26px', lg: '32px' }}
            fontWeight={'400'}
            verticalAlign={'middle'}
          >
            <UseCase variant="other">Structured DAOs</UseCase>
            <UseCase variant="other">Web3 accounts</UseCase>
            <UseCase variant="other">Reputation score for names</UseCase>
          </SimpleGrid> */}

          <Text>
            We believe links bring Internet name systems one step closer to how
            we handle identities in the physical world.
          </Text>

          <Text>
            Woolball is a flat name system! It has no subdomains. We use links
            to replace them. Hierarchy is simply not needed.
          </Text>

          <Text>
            Nevertheless, Woolball is an extension of subdomain name systems.
            Everything you could do with subdomains, you can also do with
            Woolball.
          </Text>

          <p>Ready? Let’s go! Or as we say in Woolball, “let’s link!”.</p>

          <Heading as="h2" size={{ base: 'lg', md: 'xl' }}>
            <Text className={TenikaFont.className}>
              2. Wait wait! What’s wrong with the subdomain system?
            </Text>
          </Heading>
          <p>
            Well, nothing is wrong with it, we just don’t think it answers the
            needs of a Web3 name system.
          </p>

          <p>
            Look, people use Web3 name systems, like ENS, as their identity.
            That’s clear, see crypto Twitter or any other Ethereum social
            interaction.
          </p>

          <p>
            But how are subdomains connected to this identity? That’s less
            clear.
          </p>

          <p>
            When{' '}
            <a href="https://help.coinbase.com/en/wallet/managing-account/coinbase-ens-support">
              Coinbase
            </a>{' '}
            give someone a subdomain, they kind of attest something about them.
            But since this attestation is completely separated from the person’s
            main ENS name, it’s almost invisible.
          </p>

          <p>
            Even worse! Imagine you get subdomains from more organizations (
            <a href="https://twitter.com/optinames?s=21&amp;t=ohRJcBEyBZvxGo37quLJ3w">
              OptiNames
            </a>
            ,{' '}
            <a href="https://decentraland.org/blog/announcements/id-goes-di/">
              Decenterland
            </a>
            , and <a href="https://bensyc.eth.limo/">Bensyc</a> already hand out
            some). You’ll end up managing dozens of subdomain accounts, so we’re
            back to web 2.0 all over again.
          </p>

          <p>
            Once you replace subdomains with links it all makes sense though.
            You don’t need to manage dozens of accounts. You just manage yours.
            All the rest of your accounts are linked to it; they become part of
            your Web3 identity.
          </p>

          <Heading as="h2" size={{ base: 'lg', md: 'xl' }}>
            <Text className={TenikaFont.className}>
              3. How Woolball Works: A System Overview
            </Text>
          </Heading>
          <p>
            Most name systems have only one main object, a name. Woolball,
            however, has two main objects, a name, and a link. Two! See? it’s
            already <em>exciting</em>.
          </p>

          <p>
            There’s only one layer of names in Woolball. Yup, no TLDs, no
            subdomains, and no hierarchy at all. There’s simply no need for it.
            However, all the names in this layer are <em>unique</em>.
          </p>

          <p>
            Ready? here comes the exciting part: each name can create links to
            other names (or to other links)!
          </p>

          <p>
            Links are a one-directional arrow pointing from one name (linker)
            into another name or into a link (in both cases they are called
            linkee).
          </p>

          <p>
            Every link has an alias. That alias is unique among all the links
            coming from one name (so one name can’t make two links with the same
            alias, got it?).
          </p>

          <p>How do you call links?</p>

          <p>
            First, links are written with a <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>#</Code>. A link from{' '}
            <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>alice</Code> to <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>bob</Code> is <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>alice#bob</Code>.
          </p>

          <p>
            But if <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>alice</Code> made a link to <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>bob</Code> and gave
            it the alias “BobThegreat”, then <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>alice#BobThegreat</Code> is
            the name of this link.
          </p>

          <p>
            There’s much more to say about links. How do you use them? What do
            they inherit from the names they link to? But hold your horses,
            we’ll get to it in further sections.
          </p>

          <p>
            Btw, you can imagine the graph of Woolball as being a collection of
            names with many links from one name to another. This looks like one
            big messy “ball of wool”, hence the name.
          </p>

          <Heading as="h2" size={{ base: 'lg', md: 'xl' }}>
            <Text className={TenikaFont.className}>
              4. Names
            </Text>
          </Heading>
          <p>Woolball names are the basic object of the system.</p>

          <p>
            They’re also the most boring object of the system since they’re
            similar to other name systems. Let’s not spend too many words on
            them.
          </p>

          <p>The basic facts:</p>
          <UnorderedList ml={4}>
            <ListItem ml={6}>
              The ID of the name is the hash of the name.
            </ListItem>
            <ListItem ml={6}>
              Each name has an owner, a controller, and a resolver. The owner
              owns the name, the controllers operate it, and the resolver
              specifies its functionality. This is similar to ENS.
            </ListItem>
            <ListItem ml={6}>
              <p>
                Names are registered for a finite amount of time (but can be
                extended).
              </p>

              <p>
                We didn’t want to go down the path of giving away names forever,
                because we’re afraid of eternity and afraid of losing names when
                people lose their keys.
              </p>
            </ListItem>
          </UnorderedList>

          <p>
            Each name can create links (ta-dam!), or others can create links to
            it (ta-dam again!). This gives two interesting collections
            associated with each name:
          </p>
          <OrderedList>
            <ListItem ml={6}>
              A collection of all the links the name created.
            </ListItem>
            <ListItem ml={6}>
              A collection of all the links pointing to this name.
            </ListItem>
          </OrderedList>

          <p>
            Who can extend names? The answer is not that simple, since there are
            now also links in the game. Let’s discuss that in a new subsection.
          </p>

          <Heading as="h3" size={{ base: 'md', md: 'lg' }}>
            <Text className={TenikaFont.className}>
              4.1. Extension of names
            </Text>
          </Heading>
          <p>
            We don’t want to let anyone extend the registration of a name; it
            may cause dead names (where the owner lost the key) to become
            zombies and be registered to a ghost owner forever.
          </p>

          <p>
            But there’s an issue also if we only let the owner of the name
            extend its own registration.
          </p>

          <p>
            Why? Well, when a name expires all the links it created disappear.
            However, some people may come to rely on those links; this makes it
            risky for them.
          </p>

          <p>
            To prevent the situation of names expiring before all of their links
            expire, we make the following rule for extending the registration of
            names.
          </p>

          <blockquote>
            <p>
              The registration of a name can be extended either by the owner of
              the name or by the owner of a valid link (as opposed to an
              “expired or canceled” link) that this name created.
            </p>
          </blockquote>

          <Heading as="h2" size={{ base: 'lg', md: 'xl' }}>
            <Text className={TenikaFont.className}>
              5. Links
            </Text>
          </Heading>
          <p>Let’s get the boring bits out first. Like names, each link has</p>
          <UnorderedList ml={4}>
            <ListItem ml={6}>a controller,</ListItem>
            <ListItem ml={6}>a resolver.</ListItem>
          </UnorderedList>

          <p>
            However, <em>unlike</em> names, a link doesn’t have an owner!
            Instead, it has three new fields.
          </p>
          <UnorderedList ml={4}>
            <ListItem ml={6}>from,</ListItem>
            <ListItem ml={6}>to,</ListItem>
            <ListItem ml={6}>type.</ListItem>
          </UnorderedList>

          <p>
            The fields ‘from’ and ‘to’ specify who created the link and to where
            it points. Both ‘from’ and ‘to’ can be either names or links.
          </p>

          <p>
            the ‘type’ of the link determines who actually owns the link. By
            owning we mean the person who can cancel it, transfer it, etc. We
            describe the possible types in a section below.
          </p>

          <p>
            Links have one more additional field, ‘alias’, which determines the
            name of the link. We’ll discuss that as well in a separate section.
          </p>

          <p>To sum it all up, a link object has the following structure.</p>

          <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>
            Link &#123; <br />
            <Code pl={4}>
              from: nameID;
              <br /> to: nameID;
              <br /> type;
              <br /> alias;
              <br /> resolver;
              <br />
              controller;
            </Code>
            <br /> &#125;
          </Code>

          <p>
            The ID of a link is{' '}
            <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>Hash(ID of &apos;from&apos; field, alias)</Code>.
          </p>

          <p>
            Last but not least, a link can also create other links from itself,
            and other names or links can link to it.
          </p>

          <p>
            So, similar to names, each link has two collections associated with
            it.
          </p>
          <OrderedList>
            <ListItem ml={6}>
              A collection of all the links the link created.
            </ListItem>
            <ListItem ml={6}>
              A collection of all links pointing to this link.
            </ListItem>
          </OrderedList>

          <p>
            Note that one name (or link) can make several links to another name
            (or link) as long as each got a different alias.
          </p>

          <Heading as="h3" size={{ base: 'md', md: 'lg' }}>
            <Text className={TenikaFont.className}>
              5.1. <Code fontSize={'lg'}>ahmad#basia</Code>
            </Text>
          </Heading>
          <p>
            Links are written with a <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>#</Code>. So if the name{' '}
            <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>ahmad</Code> makes a link to <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>basia</Code> it’s written
            as <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>ahmad#basia</Code>.
          </p>

          <p>
            BUT – if <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>ahmad#basia</Code> has a contenthash of a website and
            is used as a URL in a browser, you need to write{' '}
            <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>greatBasia.ahmad</Code>. See? you exchange the <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>#</Code>{' '}
            with a <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>.</Code>, and reverse the order of names in the link.
          </p>

          <p>That’s not our fault, that’s how the URL standard is.</p>

          <Heading as="h3" size={{ base: 'md', md: 'lg' }}>
            <Text className={TenikaFont.className}>
              5.2. Alias
            </Text>
          </Heading>
          <p>
            In the real world, identity has two components. One is what you
            claim about yourself, while the second is what others claim about
            you.
          </p>

          <p>
            For example, you may claim that you are “Ahmad the great”, but you
            will not really be this person till enough people will think of you
            as “Ahmad the great”.
          </p>

          <p>
            In some cases, your claim about yourself matters much less than what
            others claim about you.
          </p>

          <p>
            A link and its ‘alias’ field is a way to equip an Internet name
            system with the concept of what others think of you.
          </p>

          <p>
            Basically ‘alias’ is a string that is set by the person who created
            the link. If they choose not to set an ‘alias’, then by default the
            alias equals the name of the target of the link.
          </p>

          <p>
            The field ‘alias’ is unique among all the links a name (or a link)
            creates. One name (or link) can’t create two links with the same
            alias.
          </p>

          <p>
            The field ‘alias’ determines how we call the link. We’ll show it by
            example:
          </p>

          <p>
            If the name <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>ahmad</Code> makes a link to the name{' '}
            <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>basia</Code>, but doesn’t set an alias, then the name of the
            link is <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>ahmad#basia</Code>. However, if <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>ahmad</Code> set
            the alias of the link to <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>greatBasia</Code>, then the name of
            the link is <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>ahmad#greatBasia</Code>.
          </p>

          <Heading as="h3" size={{ base: 'md', md: 'lg' }}>
            <Text className={TenikaFont.className}>
              5.3. Types of links
            </Text>
          </Heading>
          <p>The type of the link determines who actually owns it.</p>

          <p>
            To keep it clear and simple, we defined only three types of links.
            These types give ownership of the link either to the linker, linkee,
            or a combination of both of them.
          </p>

          <p>The types are as follows.</p>

          <OrderedList>
            <ListItem ml={6}>
              <strong>Linker control</strong>. The link is not transferable,
              only the linker can extend or cancel it.
            </ListItem>
            <ListItem ml={6}>
              <strong>Linkee control</strong>. The link is transferable, where
              only the linkee can extend, cancel or transfer it.
            </ListItem>
            <ListItem ml={6}>
              <strong>Mixed control</strong>. Both the linker and the linkee can
              transfer, extend or cancel the link.
            </ListItem>
          </OrderedList>

          <Heading as="h3" size={{ base: 'md', md: 'lg' }}>
            <Text className={TenikaFont.className}>
              5.4. resolver and inheritance
            </Text>
          </Heading>
          <p>
            An important feature of links is how they inherit data from the
            linkee.
          </p>

          <p>
            By default, everything is inherited from the linkee. This means that
            if the resolver of the link is empty, then every query for data from
            the link is like a query to the linkee.
          </p>

          <p>
            However, a link can override data from the linkee or extend it, by
            having its own resolver.
          </p>

          <Heading as="h3" size={{ base: 'md', md: 'lg' }}>
            <Text className={TenikaFont.className}>
              5.5. Woolball is an extension of subdomains name systems
            </Text>
          </Heading>
          <p>
            We said that Woolball is an extension of the current name systems
            (DNS, ENS), so we have to justify that. Basically, we need to
            explain how you can do with links everything you can do with
            subdomains.
          </p>

          <p>
            You can create two types of subdomains. Either a subdomain you give
            someone else (for them to have a cool name) or a subdomain you use
            for your own usage (like, for your email server).
          </p>

          <p>
            A link to someone can do everything that a subdomain you gave to
            this someone can do. Easy.
          </p>

          <p>
            But what’s the equivalent of a subdomain you created for your own
            usage. Well, it’s a link to yourself.
          </p>

          <p>
            To be clear, links can do everything subdomains can do, but
            subdomains can’t do everything a link can do. Hence it’s an
            extension.
          </p>

          <Heading as="h2" size={{ base: 'lg', md: 'xl' }}>
            <Text className={TenikaFont.className}>
              6. The Benefits of Using Woolball on the Decentralized Web
            </Text>
          </Heading>
          <p>
            The power of Woolball comes out when considering the interaction
            between links and names. This interaction generates naturally three
            important systems:
          </p>

          <OrderedList>
            <ListItem ml={6}>Web3 accounts.</ListItem>
            <ListItem ml={6}>A reputation system.</ListItem>
            <ListItem ml={6}>Structured DAOs.</ListItem>
          </OrderedList>

          <Heading as="h3" size={{ base: 'md', md: 'lg' }}>
            <Text className={TenikaFont.className}>
              6.1. Web3 accounts
            </Text>
          </Heading>
          <p>
            We explain how Woolball generates a Web3 accounts system by an
            example.
          </p>

          <p>
            Let’s say that a DAO called ExampleDAO wants to give an account to
            one of its members, Alice. How does it do that? It creates a link
            from <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>exampleDAO</Code> to the name <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>alice</Code>, leaving
            the alias empty.
          </p>

          <p>
            … and that’s it! Alice has an account in ExampleDAO called{' '}
            <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>exampledao#alice</Code>.
          </p>

          <p>
            In which sense is it an account? If ExampleDAO tries to get data
            from <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>exampledao#alice</Code>, it sees the resolver is empty
            (since Alice didn’t do anything yet). But then it <em>follows</em>{' '}
            the link to <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>alice</Code>, and gets the data from the resolver
            of <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>alice</Code>.
          </p>

          <p>
            See, there’s no need for Alice to fill up anything new for this
            account.
          </p>

          <p>
            This works also in the opposite direction. If Alice logs into
            ExampleDAO with the name <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>alice</Code>, then the system follows
            the link <em>backwards</em>, recognizes that <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>alice</Code> is
            also <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>exampledao#alice</Code>, and approves the login attempt.
          </p>

          <p>
            That way Alice doesn’t need to manage a new user name, but she can
            simply use her standard name for this account.
          </p>

          <p>
            When does Alice define a new resolver for{' '}
            <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>exampledao#alice</Code>? when she wants to override or expand
            the resolver of <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>alice</Code>.
          </p>

          <p>There are double benefits to this accounts system.</p>

          <p>
            On the one hand, it’s super easy for anyone to make accounts for
            other people in their organization, Daaps, or platforms. On the
            other hand, people don’t need to get lost in managing all these
            accounts; their main name is a global account for everything they
            use in web3.
          </p>

          <Heading as="h3" size={{ base: 'md', md: 'lg' }}>
            <Text className={TenikaFont.className}>
              6.2. Reputation
            </Text>
          </Heading>
          <p>A link name system can generate a reputation score for names.</p>

          <p>
            Just think how useful that is. You can screen spammers, bots, or all
            those things you don’t like, based on their low reputation score.
            You can trust people you don’t know because they have a high
            reputation. It will feel so much more comfortable communicating with
            strangers in a name system that has an internal reputation system in
            place, right?
          </p>

          <p>
            There are several ways to create reputation systems for Woolball. We
            describe here one method. It’s not necessarily the best one, but
            it’s one of the simpler ones.
          </p>

          <p>
            Reputation is a subjective thing, so there is no such thing as a
            “perfect reputation system”. The quality of a system is judged
            differently by different people
          </p>

          <Heading as="h4" size={{ base: 'sm', md: 'md' }}>
            <Text className={TenikaFont.className}>
              6.2.1. A simple reputation system
            </Text>
          </Heading>
          <p>
            First, select a “trust set” of trusted names. This is a crucial
            step! The better the trust set is (like, the more reliable the names
            in it are), the more accurate the reputation score will be.
          </p>

          <p>
            Each name in the trust set has a perfect reputation score of a 100.
          </p>

          <p>
            For each name outside the trust set, calculate how many names in the
            trust set created a link to this name. Each such link equals a
            point. If the name has a 100 points (i.e., at least a 100 different
            names in the trust set have a link to it), we add it to the trust
            set and recalculate the score of all the other names.
          </p>

          <p>
            We can easily extend this method to calculate also reputation points
            for links between names outside the trust set (but each such link
            would be worth less than one point). But we save such extensions for
            a different article in order to keep the example simple.
          </p>

          <Heading as="h3" size={{ base: 'md', md: 'lg' }}>
            <Text className={TenikaFont.className}>
              6.3. Structured DAOs
            </Text>
          </Heading>
          <p>
            Many DAOs have some internal structure, with stewards, delegates,
            secretaries, workgroups, subgroups, etc. See for example ENS DAO and
            Gitcoin DAO.
          </p>

          <p>
            Right now those DAOs need an external tool to make and manage this
            structure, but with Woolball a structure can be made using the name
            system itself.
          </p>

          <p>
            What if you got three stewards? Just give them all links from the
            name of the DAO in the style of <Code className={SFFont.className} fontWeight={600} fontSize={'16px'}>dao#stewards#steward1</Code>.
            The same goes for workgroups or any role in the DAO. It’s also easy
            to update the rules when people change, you just updated the link!
          </p>

          <p>
            Links are a simple way to give role X to the person with the name Y.
          </p>

          <Heading as="h2" size={{ base: 'lg', md: 'xl' }}>
            <Text className={TenikaFont.className}>
              7. Integration with Other Name Systems
            </Text>
          </Heading>
          <p>
            Integration with other name systems on the same blockchain is
            possible using a name wrapper contract.
          </p>

          <p>
            In this case, the name wrapper contract owns the name and provides
            the regular functionality (create a link, modify a link, etc), but
            the contract also performs some actions on the other name system.
          </p>

          <p>
            For example, when someone asks a name wrapper contract to create a
            “link to itself”, it also creates a corresponding subdomain in the
            other name system.
          </p>

          <Heading as="h2" size={{ base: 'lg', md: 'xl' }}>
            <Text className={TenikaFont.className}>
              8. Summary
            </Text>
          </Heading>
          <p>
            There is a lot of attention going into name systems in the last few
            months. Some of that is hype, but lots of that is because of need.
          </p>

          <p>
            Web3 needs a good name system, and we think that the tech existing
            so far is great, but not perfect yet.
          </p>

          <p>
            There’s a path to walk before we get the mature name system Web3
            deserves. We hope Woolball is a step in the right direction.
          </p>
        </Stack>
      </Stack>
    </Layout>
  )
}

export default WhatIsWoolballPage
