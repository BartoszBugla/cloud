import { createLazyFileRoute } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <Card className="p-2 m-auto w-[180px]">
      <Button>Hello world</Button>
    </Card>
  )
}
