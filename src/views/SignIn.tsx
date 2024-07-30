import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { routerStore } from "@/stores";

/// Диалог входа
const SignIn = () => {
  const { location, navigator } = routerStore;
  const onClose = () => navigator.replace(location.pathname);
  return (
    <Modal defaultOpen onClose={onClose}>
      <ModalContent>
        <ModalHeader>Sign in</ModalHeader>
        <ModalBody>
          SIGN IN; SIGN IN; SIGN IN; <br />
          SIGN IN; SIGN IN; SIGN IN; <br />
          SIGN IN; SIGN IN; SIGN IN; <br />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" variant="light" onPress={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SignIn;
