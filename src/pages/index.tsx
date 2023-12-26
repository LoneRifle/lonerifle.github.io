import Head from 'next/head'
import {
  Container,
  Heading,
  Text,
  HStack,
  VStack,
  UnorderedList,
  ListItem,
  Icon,
} from '@chakra-ui/react'
import { Link, Button } from '@opengovsg/design-system-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Hero() {
  return (
    <VStack align="stretch">
      <Heading size="2xl">Hello there!</Heading>
      <Text>
        I am a software engineer at{' '}
        <Link href="https://open.gov.sg" target="_blank" fontWeight="bold">
          Open Government Products
        </Link>
        . I build tech for public good!
      </Text>
    </VStack>
  )
}

function About() {
  return (
    <VStack align="stretch">
      <Heading>About me</Heading>
      <Text>I&apos;m a software engineer since 2008.</Text>
      <Text>
        The best way to get to know me is to go where I frequent most! These
        places have the most up-to-date information about me.
      </Text>
      <HStack>
        <Link
          href="https://www.linkedin.com/in/alwynt/"
          _hover={{ textTransform: 'none' }}
          target="_blank"
        >
          <Button colorScheme="linkedin" leftIcon={<Icon as={FaLinkedinIn} />}>
            LinkedIn
          </Button>
        </Link>
        <Link
          href="https://github.com/LoneRifle"
          _hover={{ textTransform: 'none' }}
          target="_blank"
        >
          <Button color="white" bg="black" leftIcon={<Icon as={FaGithub} />}>
            GitHub
          </Button>
        </Link>
      </HStack>
    </VStack>
  )
}

function Contributions() {
  return (
    <VStack align="stretch">
      <Heading>Public Contributions</Heading>
      <Text>I have contributed to these projects and more:</Text>
      <UnorderedList>
        <ListItem>
          <Link
            href="https://github.com/hazelcast/hazelcast/issues?q=label%3A%22Source%3A+Community%22+author%3ALoneRifle+is%3Amerged"
            target="_blank"
          >
            <Text as="strong">Hazelcast &#x2197;</Text>
          </Link>{' '}
          - core changes to distributed in-memory key-value store similar to
          Redis
        </ListItem>
        <ListItem>
          <Link
            href="https://githubnext.com/projects/flat-data/"
            target="_blank"
          >
            <Text as="strong">Flat Data &#x2197;</Text>
          </Link>{' '}
          - using GitHub to scrape and store data. Worked on{' '}
          <Link
            href="https://github.com/githubocto/flat-ui/pulls?q=is%3Apr+is%3Amerged+author%3ALoneRifle"
            target="_blank"
          >
            UI
          </Link>{' '}
          and{' '}
          <Link
            href="https://github.com/githubocto/flat-viewer/pulls?q=is%3Apr+is%3Amerged+author%3ALoneRifle"
            target="_blank"
          >
            viewer
          </Link>{' '}
          frontend state handling, enhancements for handling JSON-based column
          types
        </ListItem>
      </UnorderedList>
    </VStack>
  )
}

function CommunityWork() {
  return (
    <VStack align="stretch">
      <Heading>Community Work</Heading>
      <Text>
        I am active in the tech community in Singapore, being present at:
      </Text>
      <UnorderedList>
        <ListItem>
          <Link href="https://t.me/projectintern" target="_blank">
            <Text as="strong">Project Intern &#x2197;</Text>
          </Link>{' '}
          - Telegram group for career advice, for undergraduates and early
          career professionals in tech
        </ListItem>
        <ListItem>
          <Link href="https://geekbrunch.sg" target="_blank">
            <Text as="strong">GeekBrunch &#x2197;</Text>
          </Link>{' '}
          - semi-annual breakfast gathering for members of the tech community
        </ListItem>
        <ListItem>
          <Link href="https://build.gov.sg" target="_blank">
            <Text as="strong">Build for Good &#x2197;</Text>
          </Link>{' '}
          - hackathon and community platform to give citizens the chance to
          tackle problems in Singapore
        </ListItem>
      </UnorderedList>
    </VStack>
  )
}

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio Page</title>
        <meta
          name="description"
          content="This is a sample portfolio page"
          key="desc"
        />
        <meta property="og:title" content="Portfolio Page" />
        <meta
          property="og:description"
          content="This is a sample portfolio page"
        />
      </Head>
      <Container p={{ base: 4, md: 12 }} maxW="container.md">
        <VStack align="stretch" spacing={8}>
          <Hero />
          <About />
          <Contributions />
          <CommunityWork />
        </VStack>
      </Container>
    </>
  )
}
