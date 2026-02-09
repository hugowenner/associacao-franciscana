import { ReactNode } from 'react'

// --- Tipos de Fundo (Adicionado para corrigir o erro do Section) ---
export type BackgroundVariant = 'light' | 'white' | 'beige' | 'gray';

// --- Componente Hero ---
export interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  overlayOpacity?: string;
  height?: 'sm' | 'md' | 'lg';
}

// --- Componente Card ---
export interface CardProps {
  title: string
  description?: string
  image?: string
  href?: string
  link?: string
  className?: string
  date?: string
  children?: ReactNode
}

// --- Dados de Unidades ---
export interface UnidadeData {
  nome: string
  sigla: string
  descricao: string
  endereco: string
  site?: string | null
}

// --- Dados de Notícias ---
export interface NoticiaFrontmatter {
  title: string
  date: string
  excerpt?: string
  image?: string
}

export interface NoticiaData extends NoticiaFrontmatter {
  slug: string
  content: string
}