import prismaClient from "../prisma";

interface createCustomerProps {
  name: string;
  email: string;
  tel: string;
  message: string;
}

export class createCustomersService {
  async execute({name, email, tel, message}: createCustomerProps) {
    
    

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        tel,
        message
      }
    })
    return customer;
  }
}