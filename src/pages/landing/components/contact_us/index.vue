<template>
  <div>
    <ContactUsHeader />
    <ContactUsBody />
  </div>
</template>

<script>
import ContactUsHeader from '@/pages/landing/components/contact_us/components/contact_us_header/index';
import ContactUsBody from '@/pages/landing/components/contact_us/components/contact_us_body/index';
export default {
  name: 'ContactUs',
  components: { ContactUsBody, ContactUsHeader },
};
</script>

<style scoped></style>
