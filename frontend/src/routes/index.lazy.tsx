import { createLazyFileRoute } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <Button>Hello world</Button>
    </div>
  )
}
