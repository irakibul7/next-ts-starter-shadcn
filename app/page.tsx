import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl font-bold text-indigo-400">
        Next TS starter with Shadcn{' '}
      </p>
      <Button>Click Me</Button>
    </div>
  )
}
