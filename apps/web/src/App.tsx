import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'
import { useCounter } from '@/store/counter'

export default function App() {
  const count = useCounter((s) => s.count)
  const inc = useCounter((s) => s.inc)

  const { data, isLoading } = useQuery({
    queryKey: ['health'],
    queryFn: async () => {
      const { data } = await api.get('/health')
      return data as { status: string }
    },
  })

  return (
    <div className="mx-auto max-w-2xl p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Vite + React + Tailwind + Query + Zustand</h1>
        <p className="text-sm text-muted-foreground">API health: {isLoading ? 'loading…' : data?.status ?? 'unknown'}</p>
      </header>

      <section className="space-x-3">
        <Button onClick={inc}>Count: {count}</Button>
        <Button variant="secondary" onClick={() => window.location.reload()}>Reload</Button>
      </section>
    </div>
  )
}
