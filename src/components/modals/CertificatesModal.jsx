import { Button, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { codingPlatforms, codingRating, certificates } from "../constants/certifi";
import { Icon } from "@iconify/react";

const CertificatesModal = (props) => {
  return (
    
    <Modal
    backdrop={"blur"}
    isOpen={props?.isCerOpen}
    onOpenChange={props?.onCerOpenChange}
    className="w-[360px] bg-zinc-950/90 md:w-[1000px]"
    hideCloseButton
  >
    
  </Modal>
  )
}

export default CertificatesModal