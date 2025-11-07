import { supabase } from './supabaseClient';

// DAILY INFO
export const getDailyInfo = async () => {
  const { data, error } = await supabase.from('daily_info').select('*');
  if (error) throw error;
  return data;
};

export const createDailyInfo = async (newData) => {
  const { data, error } = await supabase.from('daily_info').insert([newData]);
  if (error) throw error;
  return data;
};

// WEEKLY INFO
export const getWeeklyInfo = async () => {
  const { data, error } = await supabase.from('weekly_info').select('*');
  if (error) throw error;
  return data;
};

// INSTANT INFO
export const getInstantInfo = async () => {
  const { data, error } = await supabase.from('instant_info').select('*');
  if (error) throw error;
  return data;
};

// DISTRIBUTION
export const getDistributions = async () => {
  const { data, error } = await supabase.from('distribution').select('*');
  if (error) throw error;
  return data;
};

// RETURNS
export const getReturnItems = async () => {
  const { data, error } = await supabase.from('return_item').select('*');
  if (error) throw error;
  return data;
};

export const getReturnDocuments = async () => {
  const { data, error } = await supabase.from('return_document').select('*');
  if (error) throw error;
  return data;
};

// MISSING PRODUCTS
export const getMissingProducts = async () => {
  const { data, error } = await supabase.from('missing_product').select('*');
  if (error) throw error;
  return data;
};

// SCHEDULES
export const getSchedules = async () => {
  const { data, error } = await supabase.from('schedule').select('*');
  if (error) throw error;
  return data;
};

// EMPLOYEES
export const getEmployees = async () => {
  const { data, error } = await supabase.from('employee').select('*');
  if (error) throw error;
  return data;
};