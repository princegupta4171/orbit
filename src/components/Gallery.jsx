import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

const base = 'https://www.orbitebikes.in/auth/upload/Orbit%20Electric/';
const photos = [
  'b60c6853-e26a-4716-8513-1d7bf6caa010.jpeg',
  '7dc06685-2d46-47a0-888c-a8b44b777422.jpeg',
  'b1adef08-b81e-4b1f-a8f9-fab4ed7b85af.jpeg',
  'bdc41ada-808a-42e1-9e8f-65bbe2fd49b9.jpeg',
  '26dedc2a-2b1a-47ee-875a-c12b24a96f00.jpeg',
  'cc2614cd-29ce-43c3-bb5a-77d3bf739b59.jpeg',
  'ad358691-1164-46be-a893-0d0b9dabde7b.jpeg',
  'aeb7edd0-ddde-49ce-95a7-8f2af9cd179f.jpeg',
  '9701b527-09d4-43ad-8cd5-24dacf6d95de.jpeg',
  'bd48fb67-208e-47f4-a419-ba4a10cfbfe2.jpeg',
  'ac70ae3b-cd43-4882-b24b-f5e980556473.jpeg',
  'aa0904a6-dc53-40b4-aa44-fb96df0a43c5.jpeg',
  'c58c45a1-dd70-4d98-a4f0-beeea33d1abe.jpeg',
  'be74fb44-0efe-4dd2-acbf-a46cbdd414be.jpeg',
  '6d3ba3e1-525b-41d3-ab4b-ac6f5c09a954.jpeg',
];

const PER_PAGE = 6;

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(photos.length / PER_PAGE);
  const paginated = photos.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const showPrevious = () => setActiveIndex((i) => (i - 1 + photos.length) % photos.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % photos.length);

  const handlePageChange = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="gallery" className="section-shell bg-[var(--color-surface-2)] py-8">
      <div className="content-wrap">
        <div className="max-w-3xl">
          <span className="eyebrow">Gallery</span>
          <h2 className="section-title text-2xl sm:text-3xl">Brand imagery now sits inside a more cinematic and polished gallery flow.</h2>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {paginated.map((photo, index) => {
            const globalIndex = (page - 1) * PER_PAGE + index;
            return (
              <button
                key={photo}
                type="button"
                onClick={() => setActiveIndex(globalIndex)}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 text-left"
              >
                <img
                  src={`${base}${photo}`}
                  alt={`Orbit gallery ${globalIndex + 1}`}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06100c] via-[#06100c22] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-300">Frame {globalIndex + 1}</p>
                  <p className="mt-1 text-sm font-bold text-white">Orbit in motion</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[var(--color-brand)] disabled:opacity-30"
          >
            <FiChevronLeft />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => handlePageChange(p)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition ${
                p === page
                  ? 'border-[var(--color-brand)] bg-[var(--color-brand)] text-slate-950'
                  : 'border-white/10 bg-white/5 text-white hover:border-[var(--color-brand)]'
              }`}
            >
              {p}
            </button>
          ))}

          <button
            type="button"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[var(--color-brand)] disabled:opacity-30"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(5,10,8,0.94)] p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-2 top-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white"
            >
              <FiX size={20} />
            </button>
            <img
              src={`${base}${photos[activeIndex]}`}
              alt={`Orbit gallery preview ${activeIndex + 1}`}
              className="max-h-[82vh] w-full rounded-[30px] object-contain"
            />
            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={showPrevious}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white"
              >
                <FiChevronLeft /> Previous
              </button>
              <p className="text-sm text-slate-300">{activeIndex + 1} / {photos.length}</p>
              <button
                type="button"
                onClick={showNext}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white"
              >
                Next <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
