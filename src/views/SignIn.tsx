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
        <ModalHeader>Вход</ModalHeader>
        <ModalBody>
          <p>Аутентикация, авторизация, механизм учетных записей и т.п. пока еще не реализованы.</p>
          <p>Заходи кто хочешь, бери что захочешь!</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" variant="light" onPress={onClose}>
            OK
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SignIn;
