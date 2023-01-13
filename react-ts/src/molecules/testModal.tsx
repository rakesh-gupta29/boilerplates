import React from 'react'
import { useUIContext } from '../context/ui'

export default function TestModal() {
  const { toggleModal } = useUIContext()
  return (
    <div className="test-modal">
      <button onClick={() => toggleModal()}> click here to toggle modal</button>
    </div>
  )
}
