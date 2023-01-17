import React, { ReactNode } from 'react'
// import { gsap } from 'gsap'

// import { MODAL_VIEWS, useUIContext } from "../context/ui";
// import { TestModal } from "../molecules";
import './styles/modal.css'
// function renderModal(state: MODAL_VIEWS): ReactNode {
//   switch (state) {
//     case "SUCCESS_MODAL": {
//       return <TestModal />;
//     }
//     case "WARNING_MODAL": {
//       return <TestModal />;
//     }
//     default: {
//       return "";
//     }
//   }
// }
export default function ModalWrapper({ children }: { children: ReactNode }) {
  // const { isModal, modalView, toggleModal } = useUIContext();
  // const modalWrapper = useRef(null)

  // useEffect(() => {
  //   setTimeout(() => {
  //     toggleModal()
  //   }, 3000)
  // }, [])
  // useEffect(() => {
  //   console.log(isModal)
  // }, [isModal])

  // const exitAnimation = (node: any) =>
  //   animation(node, modalWrapper.current).play();
  // const enterAnimation = (node: any) =>
  //   animation(node, modalWrapper.current).reverse(0);
  return (
    <>
      {/* <Transition
        appear={true}
        timeout={2500}
        in={isModal}
        key={modalView}
        onExit={(node: any) => exitAnimation(node)}
        onEnter={(node: any) => enterAnimation(node)}
        mountOnEnter
        unmountOnExit
      >
        <div className="modal-bg">
          <div className="modal-wrapper" ref={modalWrapper}>
            <div>{renderModal(modalView)}</div>
          </div>
        </div>
      </Transition> */}

      {children}
    </>
  )
}

// function animation(parent: any, child: any) {
//   const tl = gsap.timeline();
//   tl.fromTo(
//     parent,
//     { opacity: 1, zIndex: 100 },
//     { opacity: 0, zIndex: 0, duration: 0.1 }
//   );
//   tl.add(
//     gsap.fromTo(
//       child,
//       { backgroundColor: "white" },
//       { backgroundColor: "blue", duration: 1 }
//     ),
//     ">"
//   );

//   return tl;
// }
