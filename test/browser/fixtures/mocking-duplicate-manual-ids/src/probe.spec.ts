import { expect, test, vi } from 'vitest'

vi.mock('~/modal', () => ({ modalName: 'mocked modal' }))
vi.mock('./modal', () => ({ modalName: 'mocked modal' }))

import { readProbeModal } from './probe'

test('passes with duplicate manual mocks for the same module', () => {
  expect(readProbeModal()).toBe('mocked modal')
})
