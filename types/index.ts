import { ReactNode } from 'react'

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

// ADICIONAR ESTA INTERFACE
export interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  children?: ReactNode
}

export interface UnidadeData {
  nome: string
  sigla: string
  descricao: string
  endereco: string
  site?: string | null
}

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