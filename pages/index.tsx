import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">Aeism Agency client Onboparding</Text>
        <Text className="text-zinc-600">
          Let's get to it.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">Onboarding Chat:</Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
