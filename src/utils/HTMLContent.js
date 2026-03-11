"use client";

export const HtmlContent = ({ html, className }) => {
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
};