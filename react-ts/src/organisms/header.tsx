import React from 'react'

export default function Header() {
  // const [mobileNav, toggleMobileNav] = useReducer((s) => !s, false)
  // const modalRef = useRef(null)
  // const modalAnimation = (node: any) => {
  //   const tl = gsap.timeline()
  //   tl.fromTo(
  //     node,
  //     { opacity: 0, zIndex: -1 },
  //     { opacity: 1, duration: 0.3, zIndex: 20 },
  //   )
  //   tl.fromTo(
  //     modalRef.current,
  //     {
  //       opacity: 0,
  //       xPercent: 100,
  //     },
  //     {
  //       xPercent: 0,
  //       opacity: 1,
  //       duration: 0.3,
  //     },
  //   )
  //   return tl
  // }
  return (
    <header>
      header
      {/* <Transition
        appear={true}
        timeout={2500}
        in={mobileNav}
        onEnter={(node: any) => modalAnimation(node).play()}
        onExit={(node: any) => modalAnimation(node).reverse(0)}
        mountOnEnter
        unmountOnExit
      >
        <div className="modal-bg">
          <div className="modal-wrapper" ref={modalRef}>
            <MobileNavModal toggle={toggleMobileNav} />
          </div>
        </div>
      </Transition> */}
    </header>
  )
}
