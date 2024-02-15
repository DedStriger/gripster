export const fields = [
  ["email", "phone"],
  ["secondName", "firstName", "fatherName"],
  ["city", "street", "house", "apartment"],
];

export const placeholders = {
  email: "Email",
  phone: "Номер телефона",
  secondName: "Фамилия",
  firstName: "Имя",
  fatherName: "Отчество",
  city: "Город",
  street: "Улица",
  house: "Дом",
  apartment: "Квартира",
};

export const allNames = fields.flat();
