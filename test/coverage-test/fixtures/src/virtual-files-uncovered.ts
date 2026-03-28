// @ts-expect-error -- untyped virtual file provided by custom plugin
import virtualFile from 'virtual:vitest-custom-virtual-file-1'

export function getVirtualFileMessage(name: string): string {
  return `${name}: ${virtualFile}`
}
