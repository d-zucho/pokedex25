import { cn } from '@/lib/utils/cn'

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'outline'
  className?: string
  children: React.ReactNode
}

const Button = ({ children, className, type = 'primary' }: ButtonProps) => {
  let styles = ''

  switch (type) {
    case 'primary': {
      styles = 'bg-my-blue text-my-dark-blue'
      break
    }
    case 'secondary': {
      styles = 'bg-my-yellow text-my-dark-blue'
      break
    }
    case 'outline': {
      styles = 'border border-my-dark-blue bg-transparent'
      break
    }
  }

  return (
    <button
      className={cn(
        `text-center bg-my-blue text-my-dark-blue font-bold text-base px-8 py-3 rounded-lg ${styles}`,
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
