import BaseError from "./BaseError";

class FieldsEmptyError extends BaseError {
  constructor() {
    super("Campos de entrada vazios", 422);
  }
}
export default FieldsEmptyError;
