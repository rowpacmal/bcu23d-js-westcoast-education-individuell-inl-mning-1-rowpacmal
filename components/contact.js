export const createContactUs = () => {
  const article = document.createElement('article');
  article.classList.add('about');

  article.innerHTML = `
  <header>
    <h1>
      Contact Us
    </h1>
  </header>

  <figure>
    <img
    src="/assets/images/resources/studio-republic-fotKKqWNMQ4-unsplash_2400x1600.webp"
    alt="Two people sitting in front of a computer screen"
    width="2400"
    height="1600"
    loading="lazy"
    />
  </figure>

  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
      excepturi, quae quos at nulla aut, reprehenderit sed eius, fugit
      quia aliquam dolorum inventore. Veritatis quibusdam natus quia
      voluptate dolorum aperiam voluptatum beatae, earum, quasi autem iure
      delectus molestiae? Impedit neque ducimus dolor sit delectus, minima
      dolorem? Alias consectetur distinctio quaerat.
    </p>
  </div>

  <div class="contact">
    <ul class="contact-list">
      <li class="contact-item">
        Main Address:

        <ul class="nested-item">
          <li>
            123 University Street
          </li>

          <li>
            Göteborg 45678
          </li>

          <li>
            Sweden
          </li>
        </ul>
      </li>

      <li class="contact-item">
        Phone:

        <ul class="nested-item">
          <li>
            +123 456 7890
          </li>
        </ul>
      </li>

      <li class="contact-item">
        Fax:

        <ul class="nested-item">
          <li>
            +123 456 7891
          </li>
        </ul>
      </li>

      <li class="contact-item">
        Email:

        <ul class="nested-item">
          <li>
            <a href="mailto:info@example.com">
              info@example.com
            </a>
          </li>

          <li>
            <a href="mailto:admissions@example.com">
              admissions@example.com
            </a>
          </li>
        </ul>
      </li>

      <li class="contact-item">
        Office Hours:

        <ul class="nested-item">
          <li>
            Monday - Friday: 9:00 AM - 5:00 PM
          </li>
        </ul>
      </li>

      <li class="contact-item">
        Social Media:

        <ul class="nested-item list-row">
          <li>
            <a href="https://www.facebook.com/example">
              <i class="bi-facebook big-icon"></i>
            </a>
          </li>

          <li>
            <a href="https://twitter.com/example">
              <i class="bi-twitter-x big-icon"></i>
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/example">
              <i class="bi-linkedin big-icon"></i>
            </a>
          </li>
        </ul>
      </li>

      <li class="contact-item">
        Location:

        <ul class="nested-item wide-item">
          <li>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.395122519583!2d11.9945252!3d57.7097458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30de9cbee3d%3A0xbb3f902b63916df6!2sMedieinstitutet!5e0!3m2!1sen!2sse!4v1706700180159!5m2!1sen!2sse"
              width="400"
              height="400"
              class="google-map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </li>
        </ul>
      </li>

      <li class="contact-item">
        Contact Form:

        <ul class="nested-item wide-item">
          <li>
            <form
              class="form contact-form"
              id="massageForm"
            >
              <div class="form-row">
                <label for="fullName">
                  Full Name*:
                </label>

                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div class="form-row">
                <label for="email">
                  Email*:
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@mail.com"
                  required
                />
              </div>

              <div class="form-row">
                <label for="massage">
                  Massage*:
                </label>

                <textarea
                  name="massage"
                  id="massage"
                  cols="30"
                  rows="10"
                  placeholder="Massage..."
                  required
                ></textarea>
              </div>

              <div class="buttons">
                <button
                  type="submit"
                  class="btn"
                >
                  Send
                </button>
              </div>
            </form>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  `;

  return article;
};
