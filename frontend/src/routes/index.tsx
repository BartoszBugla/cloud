import { createFileRoute } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    document.title = 'Hello world'
  },

  component: () => {
    return (
      <Card className="p-2 m-auto w-[180px]">
        <Button>Hello world</Button>
      </Card>
    )
  },
})
