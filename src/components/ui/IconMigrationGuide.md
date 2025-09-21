# Guide de Migration des Icônes

## 🎯 Objectif
Optimiser le chargement des icônes pour améliorer les performances du site (LCP, TBT, Bundle Size).

## 🔄 Migration Step-by-Step

### Avant (Performance Impact)
```tsx
import { ArrowRight, Package, Truck } from "lucide-react";

// Chaque import crée un chunk séparé + charge immédiatement
<ArrowRight className="h-4 w-4" />
```

### Après (Optimisé)
```tsx
import { OptimizedIcon } from "@/components/ui/OptimizedIcon";

// Chargement lazy + cache + code splitting optimisé
<OptimizedIcon name="ArrowRight" className="h-4 w-4" priority />
```

## 📋 Checklist de Migration

### 1. Icônes Critiques (Above-the-fold)
- [ ] Header/Navigation icons
- [ ] Hero section icons
- [ ] Call-to-action buttons
```tsx
<OptimizedIcon name="Menu" priority className="h-6 w-6" />
```

### 2. Icônes Importantes (Visible rapidement)
- [ ] Services icons
- [ ] Features icons
- [ ] Form icons
```tsx
<OptimizedIcon name="Package" className="h-8 w-8" />
```

### 3. Icônes Différées (Below-the-fold)
- [ ] Footer icons
- [ ] Testimonials icons
- [ ] FAQ icons
```tsx
<OptimizedIcon name="ChevronDown" className="h-4 w-4" />
```

## 🚀 Props OptimizedIcon

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Nom de l'icône Lucide |
| `priority` | `boolean` | `false` | Charge immédiatement (critical) |
| `size` | `number` | `24` | Taille en pixels |
| `className` | `string` | - | Classes CSS |
| `fallback` | `ReactNode` | - | Composant de fallback |

## 📊 Bénéfices Attendus

- **Bundle Size**: -40% (lazy loading + tree shaking)
- **LCP**: -200ms (critical icons prioritaires)
- **TBT**: -50ms (différer icons non-critiques)
- **CLS**: 0 (fallbacks dimensionnés)

## 🔧 Hooks Disponibles

### `usePageIconPreloader`
Précharge les icônes par page pour une navigation fluide :
```tsx
const { pageIcons } = usePageIconPreloader('home');
```

### `useCriticalIcons`
Gestion des icônes critiques :
```tsx
const { criticalIconsLoaded } = useCriticalIcons();
```

### `usePerformanceIcons`
Détection de device capabilities :
```tsx
const { isLowEndDevice } = usePerformanceIcons();
```

## 🎨 Stratégie de Migration Progressive

1. **Phase 1**: Migrer les icônes critiques (Header, Hero)
2. **Phase 2**: Migrer les icônes importantes (Services, CTA)
3. **Phase 3**: Migrer les icônes différées (Footer, FAQ)
4. **Phase 4**: Optimiser selon les métriques Core Web Vitals

## 🧪 Testing

Tester avec Lighthouse et vérifier :
- [ ] LCP amélioration
- [ ] TBT réduction
- [ ] Bundle size analysis
- [ ] Fallbacks fonctionnels