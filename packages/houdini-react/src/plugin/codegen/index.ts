import type { GenerateHookInput } from 'houdini'

import type { ProjectManifest } from './manifest'
import { generate_router } from './router'
import { generate_types } from './types'

/**
 * The router is fundamentally a component that knows how to render
 * a particular component tree for a given url. This is driven by something
 * we call the applications "manifest".
 *
 * In react, the tree of route directories maps to a component hierarchy
 * with suspense boundaries sprinkled when there is a loading directive
 * present on a query.
 */
export default async function routerCodegen(
	args: GenerateHookInput & { manifest: ProjectManifest }
) {
	// use the manifest to generate all of the necessary project files
	await Promise.all([
		generate_router(args),
		generate_types({
			config: args.config,
			manifest: args.manifest,
		}),
	])
}
