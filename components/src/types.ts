type Company = 'Junkers' | 'Buderus';

export const COMPANY = (process.env['COMPANY'] as Company) ?? 'Junkers';
