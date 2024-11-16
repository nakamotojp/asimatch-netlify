export function useNavigateToContact() {
  return (planDetails: string) => {
    const contactSection = document.getElementById('contact');
    const messageTextarea = document.querySelector(
      'textarea[name="message"]'
    ) as HTMLTextAreaElement;

    if (contactSection && messageTextarea) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      messageTextarea.value = planDetails;
      messageTextarea.dispatchEvent(new Event('input', { bubbles: true }));
    }
  };
}