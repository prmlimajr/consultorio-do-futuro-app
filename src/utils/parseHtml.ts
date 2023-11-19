const parseHtml = (html: string) => {
  const boldText = html.split('<strong>').join('').split('</strong>').join('');
  const italicText = boldText.split('<em>').join('').split('</em>').join('');
  const underlineText = italicText.split('<u>').join('').split('</u>').join('');
  const strikeText = underlineText
    .split('<strike>')
    .join('')
    .split('</strike>')
    .join('');
  const brText = strikeText.split('<br>').join('\n');
  const pText = brText.split('<p>').join('').split('</p>').join('\n\n');

  return pText;
};

export { parseHtml };
