import { SidebarContainer } from "./SidebarStyles"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={ isOpen } onClick={ toggle } >

      </SidebarContainer>
    </>
  )
}

export default Sidebar