import React, { FC } from 'react';

/**
 * مكون لمعالجة نصوص التعليقات لضمان الفصل الصحيح بين رموز التعليق (LTR) ونص التعليق (RTL)
 *
 * @param text النص الذي يمثل التعليق الكامل
 */
export const CommentText: FC<{ text: string }> = ({ text }) => {
  // Regex للبحث عن بادئات التعليق الشائعة (//, /*, *) مع مسافة بعدها
  // تم إضافة المسافة للتأكد من أنها بادئة تعليق وليست جزءًا من كلمة
  const commentPrefixRegex = /^(\s*\/+\*?\s*|\s*\*+\s*)/;
  const match = text.match(commentPrefixRegex);

  if (match) {
    // الجزء الأول هو بادئة التعليق (مثل "// " أو "/* ")
    const prefix = match[0];
    // الجزء الثاني هو باقي النص بعد البادئة
    const content = text.substring(prefix.length);

    return (
      <>
        {/* 1. تغليف البادئة في span بـ LTR ثابت لضمان عدم انعكاسها */}
        <span style={{ direction: 'ltr', unicodeBidi: 'embed' }}>
          {prefix}
        </span>
        {/* 2. عرض باقي المحتوى، والذي سيأخذ اتجاه الصفحة (RTL) بشكل صحيح */}
        <span style={{ direction: 'rtl', unicodeBidi: 'embed' }}>
          {content}
        </span>
      </>
    );
  }

  // إذا لم يتم العثور على بادئة، نعرض النص كما هو ونحدد اتجاهه يدوياً
  return (
    <span style={{ direction: 'rtl', unicodeBidi: 'embed' }}>
      {text}
    </span>
  );
};