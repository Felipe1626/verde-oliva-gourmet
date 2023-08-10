import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Product } from '../models/product.model';
import { initSupabase } from './init_supabase';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  supabase: SupabaseClient = createClient(initSupabase.supabaseUrl, initSupabase.supabaseKey)
  constructor() { }

  async addProduct(product: Product) {
    const { data, error } = await this.supabase
      .from('products')
      .insert(product)
    return{ data, error };
  }
}
