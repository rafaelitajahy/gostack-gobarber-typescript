import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateApponintmentDTO from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateApponintmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
