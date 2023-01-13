import React, { ReactNode, useEffect, useRef } from 'react'
import { SwitchTransition, Transition } from 'react-transition-group'
import { gsap, Power1 } from 'gsap'

import { MODAL_VIEWS, useUIContext } from '../context/ui'
import { TestModal } from '../molecules'
import './styles/modal.css'
function renderModal(state: MODAL_VIEWS): ReactNode {
  switch (state) {
    case 'SUCCESS_MODAL': {
      return <TestModal />
    }
    case 'WARNING_MODAL': {
      return <TestModal />
    }
    default: {
      return ''
    }
  }
}
export default function ModalWrapper({ children }: { children: ReactNode }) {
  const { isModal, modalView } = useUIContext()
  const modalWrapper = useRef(null)
  const child = useRef(null)

  // useEffect(() => {
  //   setTimeout(() => {
  //     toggleModal()
  //   }, 3000)
  // }, [])
  // useEffect(() => {
  //   console.log(isModal)
  // }, [isModal])

  const overlayAnimation = (node: any) => {
    return gsap.fromTo(
      node,
      { opacity: 0, zIndex: -10 },
      { opacity: 1, duration: 0.3, zIndex: 20 },
    )
  }

  const modalAnimation = (node: any) => {
    const tl = gsap.timeline()
    tl.add(overlayAnimation(node), 0)
    tl.fromTo(
      child,
      {
        opacity: 0,
        yPercent: -20,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.3,
      },
    )
    return tl
  }
  const renderModal = () => {
    switch (modalView) {
      case 'LOGIN_MODAL': {
        return <TestModal />
      }

      default:
        return null
    }
  }

  return (
    <>
      <Transition
        appear={true}
        mountOnEnter
        unmountOnExit
        in={isModal}
        timeout={800}
        onEnter={(node: any) => modalAnimation(node).play()}
        onExit={(node: any) => modalAnimation(node).reverse(0)}
      >
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black flex items-center justify-center px-3">
          <div
            ref={child}
            className="h-[450px] min-h-[400px] max-w-[600px] w-full bg-white "
          >
            {renderModal()}
          </div>
        </div>
      </Transition>

      {children}
    </>
  )
}

// function animation(parent: any, child: any) {
//   const tl = gsap.timeline()
//   tl.fromTo(
//     parent,
//     { opacity: 1, zIndex: 100 },
//     { opacity: 0, zIndex: 0, duration: 0.1 },
//   )
//   tl.add(
//     gsap.fromTo(
//       child,
//       { backgroundColor: 'white' },
//       { backgroundColor: 'blue', duration: 1 },
//     ),
//     '>',
//   )

//   return tl
// }
