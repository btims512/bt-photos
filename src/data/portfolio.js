const landscapeImports = import.meta.glob(
  '../assets/Landscapes/optimized/*.jpg',
  { eager: true }
)

const portraitImports = import.meta.glob(
  '../assets/Portraits/optimized/*.jpg',
  { eager: true }
)

const eventsImports = import.meta.glob(
  '../assets/Events/optimized/*.jpg',
  { eager: true }
)

const realEstateImports = import.meta.glob(
  '../assets/Real Estate/optimized/*.jpg',
  { eager: true }
)

// Pre-computed orientations from actual image dimensions
const ORIENTATIONS = {
  'btp-20.jpg': 'portrait', 'btp-30.jpg': 'landscape', 'btp-31.jpg': 'portrait',
  'btp-27.jpg': 'portrait', 'btp-32.jpg': 'landscape', 'btp-111.jpg': 'landscape',
  'btp-55.jpg': 'landscape', 'btp-82.jpg': 'landscape', 'btp-96.jpg': 'portrait',
  'btp-1.jpg': 'landscape', 'btp-54.jpg': 'landscape', 'btp-110.jpg': 'portrait',
  'btp-56.jpg': 'landscape', 'btp-95.jpg': 'portrait', 'btp-94.jpg': 'portrait',
  'btp-113.jpg': 'landscape', 'btp-107.jpg': 'landscape', 'btp-57.jpg': 'portrait',
  'btp-53.jpg': 'landscape', 'btp-47.jpg': 'landscape', 'btp-90.jpg': 'landscape',
  'btp-7.jpg': 'portrait', 'btp-6.jpg': 'landscape', 'btp-91.jpg': 'portrait',
  'btp-50.jpg': 'portrait', 'btp-128.jpg': 'portrait', 'btp-87.jpg': 'landscape',
  'btp-5.jpg': 'landscape', 'btp-92.jpg': 'portrait', 'btp-86.jpg': 'landscape',
  'btp-48.jpg': 'landscape', 'btp-9.jpg': 'portrait', 'btp-49.jpg': 'portrait',
  'btp-127.jpg': 'portrait', 'btp-133.jpg': 'portrait', 'btp-88.jpg': 'landscape',
  'btp-89.jpg': 'landscape', 'btp-126.jpg': 'portrait', 'btp-72.jpg': 'portrait',
  'btp-137.jpg': 'portrait', 'btp-135.jpg': 'landscape', 'btp-71.jpg': 'portrait',
  'btp-109.jpg': 'portrait', 'btp-108.jpg': 'landscape', 'btp-58.jpg': 'landscape',
  'btp-134.jpg': 'landscape', 'btp-28.jpg': 'portrait', 'btp-29.jpg': 'portrait',
  'btp-23.jpg': 'landscape', 'btp-18.jpg': 'landscape', 'btp-19.jpg': 'landscape',
  'btp-25.jpg': 'landscape', 'btp-26.jpg': 'landscape', 'btp-41.jpg': 'landscape',
  'btp-81.jpg': 'portrait', 'btp-80.jpg': 'landscape', 'btp-24-Edit-2.jpg': 'landscape',
  'btp-78.jpg': 'landscape', 'btp-129.jpg': 'portrait', 'btp-74.jpg': 'landscape',
  'btp-124.jpg': 'portrait', 'btp-8.jpg': 'portrait', 'btp-125.jpg': 'landscape',
  'btp-75.jpg': 'landscape', 'btp-131.jpg': 'portrait', 'btp-63.jpg': 'landscape',
  'btp-62.jpg': 'landscape', 'btp-76.jpg': 'landscape', 'btp-67.jpg': 'portrait',
  'btp-73.jpg': 'portrait', 'btp-65.jpg': 'landscape', 'btp-120.jpg': 'portrait',
  'btp-64.jpg': 'landscape', 'btp-69-3.jpg': 'landscape', 'btp-11.jpg': 'portrait',
  'btp-39.jpg': 'portrait', 'btp-130-Edit-Edit.jpg': 'portrait',
  'btp-22.jpg': 'portrait', 'btp-36.jpg': 'landscape', 'btp-35.jpg': 'landscape',
  'btp-21.jpg': 'portrait', 'btp-34.jpg': 'landscape', 'btp-33.jpg': 'portrait',
  'btp-138.jpg': 'portrait', 'btp-112.jpg': 'portrait', 'btp-116.jpg': 'landscape',
  'btp-52.jpg': 'portrait', 'btp-79.jpg': 'landscape', 'btp-51.jpg': 'portrait',
  'btp-60.jpg': 'landscape', 'btp-61.jpg': 'landscape', 'btp-119.jpg': 'portrait',
  'btp-59.jpg': 'portrait', 'btp-141.jpg': 'portrait',
  'btp-139.jpg': 'landscape', 'btp-2.jpg': 'landscape', 'btp-3.jpg': 'landscape',
  'btp-4.jpg': 'landscape', 'btp-42.jpg': 'portrait', 'btp-43.jpg': 'portrait',
  'btp-44.jpg': 'landscape', 'btp-45.jpg': 'landscape', 'btp-46.jpg': 'portrait',
  'btp-83.jpg': 'landscape', 'btp-84.jpg': 'landscape',
}

const getSpan = (path) => {
  const filename = path.split('/').pop()
  return ORIENTATIONS[filename] === 'portrait' ? 'row-span-2' : ''
}

const EXCLUDED_LANDSCAPES = ['btp-69-1.jpg']

const landscapeFiles = Object.entries(landscapeImports)
  .filter(([path]) => !EXCLUDED_LANDSCAPES.some((e) => path.endsWith(e)))
  .sort(([a], [b]) => a.localeCompare(b))

const portraitFiles = Object.entries(portraitImports)
  .sort(([a], [b]) => a.localeCompare(b))

const eventsFiles = Object.entries(eventsImports)
  .sort(([a], [b]) => a.localeCompare(b))

const realEstateFiles = Object.entries(realEstateImports)
  .sort(([a], [b]) => a.localeCompare(b))

const landscapePhotos = landscapeFiles.map(([path, mod], i) => ({
  id: i + 1,
  category: 'Landscape',
  src: mod.default,
  alt: `Landscape photography ${i + 1}`,
  span: getSpan(path),
}))

const portraitPhotos = portraitFiles.map(([path, mod], i) => ({
  id: 500 + i,
  category: 'Portrait',
  src: mod.default,
  alt: `Portrait photography ${i + 1}`,
  span: getSpan(path),
}))

const eventsPhotos = eventsFiles.map(([path, mod], i) => ({
  id: 1000 + i,
  category: 'Events',
  src: mod.default,
  alt: `Event photography ${i + 1}`,
  span: getSpan(path),
}))

const realEstatePhotos = realEstateFiles.map(([path, mod], i) => ({
  id: 1500 + i,
  category: 'Real Estate',
  src: mod.default,
  alt: `Real estate photography ${i + 1}`,
  span: getSpan(path),
}))

export const categories = ['All', 'Portrait', 'Events', 'Landscape', 'Real Estate']

const interleave = (...arrays) => {
  const result = []
  const max = Math.max(...arrays.map((a) => a.length))
  for (let i = 0; i < max; i++) {
    arrays.forEach((arr) => { if (arr[i]) result.push(arr[i]) })
  }
  return result
}

export const photos = interleave(portraitPhotos, eventsPhotos, landscapePhotos, realEstatePhotos)
