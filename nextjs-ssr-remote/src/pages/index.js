export default function Home() {
  return (
    <div>
      <main classname="flex min-h-screen flex-col items-center justify-between p-24">
        Hello world!
      </main>
    </div>
  )
}

Home.getInitialProps = () => {
  return { count: 0 }
}
