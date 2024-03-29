// Import the generated route tree
import { createRouter } from '@tanstack/react-router'

import { routeTree } from '@/routeTree.gen'

// Create a new router instance
export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
