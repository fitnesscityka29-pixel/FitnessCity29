# Using Custom Images

To use your own images in this project, follow these steps:

1. Upload your image file (e.g., `my-gym-photo.jpg`) into this `src/assets` folder.
2. In your React component, import the image at the top of the file:

```javascript
import myImage from '../assets/my-gym-photo.jpg';
```

3. Use the imported variable in the `src` attribute of an `img` tag:

```jsx
<img src={myImage} alt="My Gym Photo" className="w-full h-auto rounded-lg shadow-lg" />
```

Here is a complete example component:

```jsx
import React from 'react';
import myGymPhoto from '../assets/my-gym-photo.jpg'; // 1. Import the image

export default function CustomImageExample() {
  return (
    <div className="p-4 border-2 border-red-600 rounded-xl bg-zinc-900">
      <h3 className="text-yellow-400 font-bold text-xl mb-4">My Custom Image</h3>
      
      {/* 2. Use it in the src attribute */}
      <img 
        src={myGymPhoto} 
        alt="Fitness City Gym" 
        className="w-full h-64 object-cover rounded-lg border border-yellow-500"
      />
    </div>
  );
}
```
