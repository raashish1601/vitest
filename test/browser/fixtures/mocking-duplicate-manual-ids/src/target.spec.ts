import { expect, test } from 'vitest'

import { readTargetModal } from './target'

test('is not affected by a previous file mock', () => {
  expect(readTargetModal()).toBe('real modal')
})
