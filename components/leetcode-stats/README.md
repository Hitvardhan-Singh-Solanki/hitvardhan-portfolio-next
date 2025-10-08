# LeetCode Stats Component

A beautiful, animated component that displays LeetCode statistics including problem-solving progress, rankings, and achievements.

## Features

- 📊 **Real-time Stats** - Fetches live data from LeetCode APIs
- 🎨 **Animated Progress Bars** - Smooth GSAP animations with stagger effects
- 🌓 **Theme Support** - Automatically adapts to light/dark theme
- 📱 **Responsive Design** - Works perfectly on all device sizes
- ⚡ **Error Handling** - Graceful fallbacks and loading states
- 🔄 **Multiple API Sources** - Falls back to GraphQL if REST API fails

## Usage

### Basic Usage

```tsx
import LeetCodeStats from "@/components/leetcode-stats/leetcode-stats";

export default function MyPage() {
  return (
    <div>
      <LeetCodeStats username="your-leetcode-username" />
    </div>
  );
}
```

### Customization

To change the LeetCode username, simply pass a different username prop:

```tsx
<LeetCodeStats username="hitvardhan" />
```

## API Endpoint

The component uses a Next.js API route located at `/pages/api/leetcode.ts`.

### API Response Format

```typescript
{
  username: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
}
```

### API Sources

1. **Primary**: Unofficial LeetCode Stats API (`leetcode-stats-api.herokuapp.com`)
2. **Fallback**: LeetCode GraphQL API (`leetcode.com/graphql`)

## Displayed Metrics

### Main Stats
- **Total Solved** - Total problems solved with progress percentage
- **Easy/Medium/Hard** - Breakdown by difficulty level with progress bars

### Additional Stats
- **Acceptance Rate** - Overall acceptance rate percentage
- **Global Ranking** - Your global LeetCode ranking
- **Contribution Points** - Community contribution score
- **Reputation** - Your LeetCode reputation points

## Styling

The component uses SCSS modules with CSS custom properties for theming:

- `--card-bg` - Card background color
- `--card-border` - Card border color
- `--foreground` - Primary text color
- `--text-secondary` - Secondary text color
- `--background` - Background color
- `--primary` - Primary accent color

### Difficulty Colors

- **Easy**: `#00b8a3` (green gradient)
- **Medium**: `#ffa116` (orange gradient)
- **Hard**: `#ff375f` (red gradient)

## Animation

The component uses the `useStaggerAnimation` hook for smooth entrance animations:

- **Stagger delay**: 0.1s between elements
- **Animation**: Fade in from bottom (opacity 0 to 1, y: 30 to 0)
- **Items animated**: Header, stat cards, and additional stats section

## Loading & Error States

### Loading State
Shows a spinner with "Loading stats..." message while fetching data.

### Error State
Displays an error message if:
- Username is invalid
- API requests fail
- Network issues occur

## Integration

The component is currently integrated into the About page:

```tsx
// app/about/page.tsx
import LeetCodeStats from "@/components/leetcode-stats/leetcode-stats";

export default function About() {
  return (
    <div>
      {/* Other content */}
      <LeetCodeStats username="hitvardhan" />
      {/* More content */}
    </div>
  );
}
```

## Performance

- **Lazy Loading** - Data fetched only when component mounts
- **Caching** - Browser caching for API responses
- **Optimized Animations** - Hardware-accelerated CSS transforms
- **Small Bundle** - Minimal dependencies

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## TypeScript Support

Fully typed with TypeScript interfaces for:
- Component props
- API responses
- LeetCode stats data structure

## Future Enhancements

Potential improvements:
- [ ] Add caching/revalidation with SWR or React Query
- [ ] Show solved problems by category (Arrays, Strings, etc.)
- [ ] Display streak information
- [ ] Add submission calendar heatmap
- [ ] Show recent submissions
- [ ] Compare stats with friends

## Troubleshooting

### Stats not loading?
1. Check if the username is correct
2. Verify the LeetCode profile is public
3. Check browser console for API errors
4. Try clearing browser cache

### API rate limiting?
If you experience rate limiting, consider:
- Implementing caching with Redis
- Using SWR with revalidation intervals
- Self-hosting the stats API

## License

This component is part of the Hitvardhan Portfolio project and follows the same MIT license.

