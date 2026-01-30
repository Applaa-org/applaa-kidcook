import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import Safety from "./pages/Safety";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create routes
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

const recipesRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/recipes',
  component: Recipes,
})

const recipeDetailRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/recipes/$slug',
  component: RecipeDetail,
})

const safetyRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/safety',
  component: Safety,
})

const aboutRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute, 
  recipesRoute, 
  recipeDetailRoute, 
  safetyRoute, 
  aboutRoute
])

// Create router
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultNotFoundComponent: NotFound,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;