import React from 'react';
import { create } from 'react-test-renderer'
import ProfileStatus from '../ProfileStatus/ProfileStatus'

describe('ProfileStatus component', () => {
  test('status from props should be in state', () => {
    const component = create(<ProfileStatus status="naruto" />)
    const root = component.root
    const span = root.findByType('span')
    expect(span.length).toBe(1)
  })
})